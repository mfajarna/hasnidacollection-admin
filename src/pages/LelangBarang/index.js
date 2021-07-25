import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Ic_gagal } from '../../assets';
import {Headers, Kategori, Gap, HomeTabSection, LelangStatus} from '../../components';
import { getStatusLelang } from '../../redux/action';

const LelangBarang = ({navigation}) => {
    const dispatch = useDispatch();
    const{statusLelang} = useSelector(state => state.lelangReducer);

    useEffect(() => {
        dispatch(getStatusLelang())
    },[])

    var data = "";
    statusLelang.map(status => {
        data = status.status;
    })

    const renderHomeTab = () => {
        if(data === "ON_PROGRESS")
        {
            return (
                <View style={styles.noContent}>
                    <View style={styles.icon}>
                         <Ic_gagal />
                    </View>
                    <Text style={styles.textNoContent}>Tidak bisa mengatur lelang lebih dari 1 item!</Text>
                    <Text style={styles.textNoContent}>Pergi ke menu status lelang untuk </Text>
                    <Text style={styles.textNoContent}>melihat status lelang!</Text>
                </View>
            )
        }
        return (
            <HomeTabSection />
        )
    }

    return (
    <View style={styles.page}>
        <Headers title="Lelang Barang" subTitle="Atur Lelang Barang Disini" onBack={() => navigation.navigate('MainApp')} />
        <View style={styles.content}>
            <Gap height={10}/>
             <Text style={styles.desc}>Detail Lelang </Text>
             
            <Gap height={10}/>
            <View style={styles.kategori}>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategoriItem}>
                    <LelangStatus
                    label="Status Lelang"
                    onPress={() => navigation.navigate('StatusLelang')}
                    />
              </View>

             <View style={styles.kategoriItem}>
                    <LelangStatus
                    label="Pemenang Lelang"
                    onPress={() => navigation.navigate('CategoryPakaian')}
                    />
              </View>

            <View style={styles.kategoriItem}>
                    <LelangStatus
                    label="History Lelang"
                    onPress={() => navigation.navigate('CategoryPakaian')}
                    />
              </View>
                </ScrollView>
          </View>
      </View>
        <View style={styles.tabContent}>
            <Text style={styles.detail}>Pilih barang untuk dilelang!</Text>
            {renderHomeTab()}
        </View>
    </View>
    )
}

export default LelangBarang

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E3E3E3'
    },
    content: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    kategori: {
        flexDirection: 'row',
        marginBottom: 20,
  },
    kategoriItem: {
        paddingRight: 10,
        marginLeft: 10,
        width: 80,
        paddingVertical: 10,
  },
    desc: {
      fontFamily: 'Nunito-Regular',
      fontSize: 16,
      color: '#595260',
      paddingHorizontal: 6
  },
  tabContent: {
      flex: 1,
  },
  detail:{
      paddingHorizontal: 25,
      backgroundColor: 'white',
      fontFamily: 'Nunito-Regular',
      fontSize: 16,
      color: '#595260',
  },
  noContent:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25
  },
  textNoContent: {
      fontSize: 15,
      fontFamily: 'Nunito-SemiBold'
  },
  icon:{
      marginTop: -40,
      marginBottom: 10,
  }
})
