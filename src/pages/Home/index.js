import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Fitur, Gap, Kategori, SearchInput} from '../../components/atoms';
import {AdminSection, HomeTabSection, WelcomeUser} from '../../components/molecules';
import firebase from '../../config/Fire'
import { getData } from '../../utils';

const Home = ({onPress, navigation}) => {
  const [admin, setAdmin] = useState([]);

  useEffect(() =>{
    getUserData();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
    });
  };


  return (
    <View style={styles.pages}>
      <View style={styles.nav}>
        <View style={styles.header}>
          <WelcomeUser />
        </View>
      </View>
      <Gap height={10} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.text}>Atur menu dan konfirmasi </Text>
        <Text style={styles.text}>konfirmasi disini!</Text>
        <Gap height={30} />

        <View style={styles.page}>
          <Text style={styles.textFitur}>Fitur Kami</Text>
          <Gap height={12} />
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Lelang Barang" />
            </View>
            <View style={styles.content}>
              <Fitur label="Pembelian" onPress={() => navigation.navigate('Pembelian')} />
            </View>
          </View>
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Tukar Barang" />
            </View>
            <View style={styles.content}>
              <Fitur label="Tentang Kami" />
            </View>
          </View>
          <Gap height={10} />
          <Text style={styles.textFitur}>Pilih Kategori</Text>
          <Gap height={12} />
          <View style={styles.kategori}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategoriItem}>
                <Kategori
                  label="PAKAIAN"
                  onPress={() => navigation.navigate('CategoryPakaian')}
                />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="HEELS"  onPress={() => navigation.navigate('CategoryHeels') } />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="HIJAB" onPress={() => navigation.navigate('CategoryHijab') } />
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="TAS" onPress={() => navigation.navigate('CategoryTas') }/>
              </View>
              <View style={styles.kategoriItem}>
                <Kategori label="BEAUTY" onPress={() => navigation.navigate('CategoryBeauty') } />
              </View>
            </ScrollView>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
  },
  page: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
  },
  pages: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  adminSection:{
    marginBottom: 15,
  },    
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    paddingHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 10,
  },
  textFitur: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  fitur: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 9,
  },
  kategori: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  kategoriItem: {
    paddingRight: 5,
    marginLeft: 5,
    width: 77,
    paddingVertical: 10,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 5,
  },
  admin:{
    marginTop: 15,
  }
});
