import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getCollectionDataByTypes} from '../../../redux/action/home';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      alignItems: 'space-around',
    }}
    style={{
      backgroundColor: 'white',
      evelation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    contentContainerStyle={{
      justifyContent: 'space-around',
    }}
    tabStyle={{elevation: 0}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontFamily: 'Nunito-Regular',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {newCollection} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getCollectionDataByTypes('new_collection'));
  }, []);

  return (
    <View style={{flex: 1,}}> 
      <ScrollView>
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
 
      {newCollection.map(itemNew => {
        return (
          <ItemListFood
            key={itemNew.id}
            type="product"
            name={itemNew.name}
            price={itemNew.price}
            stock={itemNew.stock}
            rating={itemNew.rate}
            image={{uri: itemNew.picturePath}}
            onPress={() => navigation.navigate('LelangDetail', itemNew)}
          />
        );
      })}
    </View>
    </ScrollView>
    </View>

  );
};

const PopularSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getCollectionDataByTypes('popular'));
  }, []);
  return (
     <View style={{flex: 1}}> 
      
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
      {popular.map(itemPopular => {
        return (
          <ItemListFood
            key={itemPopular.id}
            type="product"
            name={itemPopular.name}
            price={itemPopular.price}
            stock={itemPopular.stock}
            rating={itemPopular.rate}
            image={{uri: itemPopular.picturePath}}
            onPress={() => navigation.navigate('LelangDetail', itemPopular)}
          />
        );
      })}
      </ScrollView>
    </View>
    
    </View>
 
  );
};

const RecommendedSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getCollectionDataByTypes('recommended'));
  }, []);
  return (
    <View style={{flex: 1}}> 
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
      {recommended.map(itemRecommended => {
        return (
          <ItemListFood
            key={itemRecommended.id}
            type="product"
            name={itemRecommended.name}
            price={itemRecommended.price}
            stock={itemRecommended.stock}
            rating={itemRecommended.rate}
            image={{uri: itemRecommended.picturePath}}
            onPress={() => navigation.navigate('LelangDetail', itemRecommended)}
          />
        );
      })}
       </ScrollView>
    </View>
   
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Collection'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    first: NewSection,
    second: PopularSection,
    third: RecommendedSection,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
