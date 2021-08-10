import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import NotifService from '../../NotifService';
import {Fitur, Gap, Kategori, SearchInput} from '../../components/atoms';
import {
  AdminSection,
  HomeTabSection,
  WelcomeUser,
} from '../../components/molecules';
import firebase from '../../config/Fire';
import {getData} from '../../utils';

const Home = ({onPress, navigation}) => {
  const [admin, setAdmin] = useState([]);

  const[registerToken,setRegisterToken] = useState('');
  const[fcmRegistered,setFcmRegistered] = useState(false);

    const onRegister = (token) => {
        setRegisterToken(token.token);
        setFcmRegistered(true);
    }

    const onNotif = (notif) => {
        
        notifikasi.localNotif(notif.message)
    }

    const notifikasi = new NotifService(onRegister,onNotif);

    const handlePerm = (perms) => {
        Alert.alert('Permission',  JSON.stringify(perms));
    }

    notifikasi.requestPermissions();

  useEffect(() => {
    getAdmin();
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

    const getAdmin = () => {
    firebase.database()
      .ref('users/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setAdmin(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }

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
        <Text style={styles.text}>Pelanggan disini!</Text>
        <Gap height={30} />

        <View style={styles.page}>
          <Text style={styles.textFitur}>Fitur Kami</Text>
          <Gap height={12} />
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur
                label="Lelang Barang"
                onPress={() => navigation.navigate('LelangBarang')}
              />
            </View>
            <View style={styles.content}>
              <Fitur
                label="Pembelian"
                onPress={() => navigation.navigate('Pembelian')}
              />
            </View>
          </View>
          <View style={styles.fitur}>
            <View style={styles.content}>
              <Fitur label="Tukar Barang" onPress={() => navigation.navigate('TukarBarang')} />
            </View>
            <View style={styles.content}>
              <Fitur label="Tentang Kami" />
            </View>
          </View>
          <Gap height={10} />
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
  adminSection: {
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
  admin: {
    marginTop: 15,
  },
});
