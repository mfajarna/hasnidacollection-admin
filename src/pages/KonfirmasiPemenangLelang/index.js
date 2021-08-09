import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {DummyImg1} from '../../assets';
import {Headers, ItemListFood, ItemValue} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import axios from 'axios';
import { getData, showMessage } from '../../utils';

const KonfirmasiPemenangLelang = ({route, navigation}) => {

  const {id,collection,lelangdetail,pembayaranPath,user,status} = route.params;

    console.log('id',id)

  const onSubmit = () => {
    const data = {
      status: 'KONFIRMASI'
    }

  

    getData('token').then(resToken => {
      axios.post(`http://27.112.78.10/api/update-status/${id}`, data, {
      headers: {
        'Authorization' : resToken.value
      }
    }).then(res => {
        console.log(res)
      showMessage('Berhasil Konfirmasi Data', 'success')
      navigation.reset({
        index: 0,
        routes: [
          {name: 'KonfirmasiLelang'}
        ]
      })
    }).catch(err => {
      console.log('err: ', err)
    })
    })
  }

  return (
    <View style={styles.container}>
      <Headers
        title="Konfirmasi Pemenang Lelang"
        subTitle="Cek Detail Konfirmasi Pemenang Lelang"
        onBack={() => navigation.reset({index: 0, routes:[{name:'KonfirmasiLelang'}]})}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Informasi Barang</Text>
          <ItemValue label="Nama Barang" value={collection.name} />
          <ItemValue label="Oleh" value={user.name} />
          <ItemValue label="Email" value={user.email} />
          <ItemValue label="Status" value={status} />
        </View>

        <View style={styles.contentImage}>
          <Image style={styles.image} source={{ uri:pembayaranPath }} />
        </View>

      </ScrollView>
      <View style={styles.button}>
        <Button
          text="Konfirmasi"
          onPress={onSubmit}
          color="#50CB93"
          textColor="white"
        />
        <Gap height={5} />
      </View>
    </View>
  );
};

export default KonfirmasiPemenangLelang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentImage: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginBottom: 8,
    color: '#020202',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  image:{
    width: 250,
    height: 250,
    borderRadius: 10,
  }
});
