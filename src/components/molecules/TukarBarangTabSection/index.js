import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {DummyImg1, DummyImg2, DummyImg3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
  getConfirmation,
  getDelivery,
  getDone,
  getInProgress,
  getPastOrders,
} from '../../../redux/action/order';
import { Button } from '../../atoms';
import { getDataPemenangLelang, getDeliveryLelang, getDikemasLelang, getDikirimAdmin, getDikirimPembeli, getDiterimaPembeli, getDoneLelang, getKonfirmasiAdmin, getKonfirmasiLelang, getTukarBarangKonfirmasi } from '../../../redux/action';
import ItemLelangSection from '../ItemLelangSection';
import ItemTukarBarang from '../ItemTukarBarang';

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

const InProgress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataKonfirmasi} = useSelector(state => state.tukarReducer);
  useEffect(() => {
    dispatch(getTukarBarangKonfirmasi());
  }, []);

  return (
    <ScrollView>
     
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {dataKonfirmasi.map(order => {
          return (
            <ItemTukarBarang
                key={order.id}
                image={order.collection.picturePath}
                name={order.collection.name}
                namaPembeli={order.users.name}
                status={order.status}
                id={order.id}
            />
            
          );
        })}
      </View>
    </ScrollView>
  );
};


const Delivery = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataKonfirmasiAdmin} = useSelector(state => state.tukarReducer);
  useEffect(() => {
    dispatch(getKonfirmasiAdmin());
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {dataKonfirmasiAdmin.map(order => {
          return (
            <ItemTukarBarang
                key={order.id}
                image={order.collection.picturePath}
                name={order.collection.name}
                namaPembeli={order.users.name}
                status={order.status}
                id={order.id}
            />
            
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataDikirimAdmin} = useSelector(state => state.tukarReducer);
  useEffect(() => {
    dispatch(getDikirimAdmin());
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {dataDikirimAdmin.map(order => {
          return (
            <ItemTukarBarang
                key={order.id}
                image={order.collection.picturePath}
                name={order.collection.name}
                namaPembeli={order.users.name}
                status={order.status}
            />
            
          );
        })}
      </View>
    </ScrollView>
  );
};

const Konfirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataDikirimPembeli} = useSelector(state => state.tukarReducer);
  useEffect(() => {
    dispatch(getDikirimPembeli());
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {dataDikirimPembeli.map(order => {
          return (
            <ItemTukarBarang
                key={order.id}
                image={order.collection.picturePath}
                name={order.collection.name}
                namaPembeli={order.users.name}
                status={order.status}
                id={order.id}
            />
            
          );
        })}
      </View>
    </ScrollView>
  );
};


const DiterimaPembeli = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataDiterimaPembeli} = useSelector(state => state.tukarReducer);
  useEffect(() => {
    dispatch(getDiterimaPembeli());
  }, []);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {dataDiterimaPembeli.map(order => {
          return (
            <ItemTukarBarang
                key={order.id}
                image={order.collection.picturePath}
                name={order.collection.name}
                namaPembeli={order.users.name}
                status={order.status}
            />
            
          );
        })}
      </View>
    </ScrollView>
  );
};



const initialLayout = {width: Dimensions.get('window').width};

const TukarBarangTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Konfirmasi'},
    {key: 'second', title: 'Dikirim Pembeli'},
    {key: 'third', title: 'Konfirmasi Admin'},
    {key: 'fourth', title: 'Dikirim Admin'},
    {key: 'fiveth', title: 'Diterima Pembeli'}
  ]);

  const renderScene = SceneMap({
    first: InProgress,
    second: Konfirmation,
    third: Delivery,
    fourth: PastOrders,
    fiveth: DiterimaPembeli,
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

export default TukarBarangTabSection;

const styles = StyleSheet.create({});
