import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Number, Rating} from '..';
import { setLoading } from '../../../redux/action';
import { getData } from '../../../utils';

const ItemListFood = ({
  image,
  onPress,
  onPressBayar,
  items,
  stock,
  rating,
  price,
  type,
  name,
  date,
  status,
  number,
  itemName,
  section,
  idPesanan,

}) => {

  const[token,setToken] = useState('');

  useEffect(() => {
    getData('token').then(resToken => {
      setToken(resToken.value)
    })
  }, []);

  const onDelivery = () => {
      const data = {
            status: 'ON_DELIVERY'
        }
        axios.post(`http://ecommerce.iottelnet.com/api/transaction/${idPesanan}`, data, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            showMessage('Berhasil konfirmasi order','success');
           
        }).catch(err => {
            console.log(err.message);
            showMessage('Gagal Konfirmasi order');
        })
  }

  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.desc} />
              <Text style={styles.desc}>Stock: {stock}</Text>
              {/* <Text style={styles.desc}>IDR {price}</Text> */}
            </View>
            <Rating number={rating} />
          </>
        );

      case 'order-summary':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} />
              {/* <Text style={styles.desc}>IDR {price}</Text> */}
            </View>

            <Text style={styles.items}>Jumlah: {items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>Atas Nama: {name}</Text>
              <Text style={styles.desc}>{itemName}</Text>
              <Text style={styles.desc}>
                {items} items . <Number number={price} />
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . <Number number={price} />
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>{stock}</Text>
              <Number number={price} style={styles.desc} />
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
        {section === 'konfirmasi' && (
          <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onDelivery}>
                <Text style={styles.textBayar}>Delivery</Text>
        </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  date: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#1ABC9C',
  },
  buttonBayar: {
    backgroundColor: '#26B99A',
    padding: 6,
    borderRadius: 3,
  },
  textBayar:{
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: 'white'
  }
});
