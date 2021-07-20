import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Headers, ListCostumer, OrderTabSection} from '../../components/molecules';
import { getCostumerData } from '../../redux/action';
import {getOrders} from '../../redux/action/order';

const Keranjang = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCostumerData());
  }, []);

  return (
    <View style={styles.page}>
        <View style={styles.content}>
          <Headers title="Cek Pesanan" subTitle="Cek pesananmu pelanggan disini" />
          <View style={styles.tabContainer}>
            <Text style={styles.title}>Daftar List Pembelian Costumer</Text>
            <OrderTabSection />
          </View>
        </View>
  
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
  title:{
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#020202',
    paddingHorizontal: 24,
    marginBottom: 24,
  }
});
