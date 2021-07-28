import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {DummyImg1} from '../../assets';
import {Headers, ItemListFood, ItemValue} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import axios from 'axios';
import { getData, showMessage } from '../../utils';

const OrderDetail = ({route, navigation}) => {

  const {collection,alasan_tukar_barang,buktiPhoto,id,id_collection,id_users,users} = route.params;
  
  const onSubmit = () => {
    const data = {
      status: 'KONFIRMASI'
    }

    getData('token').then(resToken => {
      axios.post(`http://27.112.78.10/api/statusBarang/${id}`, data, {
      headers: {
        'Authorization' : resToken.value
      }
    }).then(res => {
      showMessage('Berhasil Konfirmasi Data', 'success')
      navigation.reset({
        index: 0,
        routes: [
          {name: 'TukarBarang'}
        ]
      })
    }).catch(err => {
      console.log('err: ', err)
    })
    })
  }

  const onCancel = () => {

     const data = {
      status: 'CANCELLED'
    }

    getData('token').then(resToken => {
      axios.post(`http://27.112.78.10/api/statusBarang/${id}`, data, {
      headers: {
        'Authorization' : resToken.value
      }
    }).then(res => {
      showMessage('Berhasil Konfirmasi Data','success')
      navigation.reset({
        index: 0,
        routes: [
          {name: 'TukarBarang'}
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
        title="Konfirmasi Tukar Barang"
        subTitle="Cek Detail Konfirmasi Tukar Barang"
        onBack={() => navigation.reset({index: 0, routes:[{name:'TukarBarang'}]})}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Informasi Barang</Text>
          <ItemValue label="Nama Barang" value={collection.name} />
          <ItemValue label="Deskripsi" value={collection.description} />
          <ItemValue label="Oleh" value={users.name} />
          <ItemValue label="Email" value={users.email} />
          <ItemValue label="Alasan Tukar" value={alasan_tukar_barang} />
        </View>

        <View style={styles.contentImage}>
          <Image style={styles.image} source={{ uri:buktiPhoto }} />
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
        <Button
          text="Tolak"
          onPress={onCancel}
          color="#FF616D"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default OrderDetail;

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
