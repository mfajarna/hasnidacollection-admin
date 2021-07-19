import React, { Profiler } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyImg3 } from '../../assets';
import { Headers, ItemValue } from '../../components/molecules'
import DashedLine from 'react-native-dashed-line';
import { Button, Gap } from '../../components/atoms';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { getData, showMessage } from '../../utils';

const PesananDetail = ({navigation, route }) => {
    const info = route.params;
    const[token,setToken] = useState('');

    const status = info.status;



    useEffect(()=>{
        getData('token').then(resToken => {
            setToken(resToken.value);
        })
    }, [])

    const onSubmit = () => {
        const data = {
            status: 'CONFIRMATION'
        }
        axios.post(`http://ecommerce.iottelnet.com/api/transaction/${info.id}`, data, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            showMessage('Berhasil konfirmasi order','success');
            navigation.reset({index: 0, routes:[{name: 'MainApp'}]});
        }).catch(err => {
            console.log(err.message);
            showMessage('Gagal Konfirmasi order');
        })
    }

    return (
        <View style={styles.container}>
            <Headers title="Konfirmasi Pembelian" subTitle="Konfirmasi pembelian barang" onBack={()=> navigation.goBack()} />
            <View style={styles.imageContainer}>
                <Image style={styles.images} source={{ uri: info.pembayaranPath }}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Informasi Pembelian</Text>
                <ItemValue label="Nama Costumer" value={info.user.name} />
                <ItemValue label="Nama Barang" value={info.collection.name}/>
                <ItemValue label="Harga" type="currency" value={info.collection.price}/>
                <ItemValue label="Jumlah Beli" value={info.quantity}/>
                <DashedLine dashLength={5} />
                <ItemValue label="Total Harga" type="currency" value={info.total}/>
                <Gap height={5}/>
                <ItemValue label="Status" value={info.status} valueColor="#50CB93" />
            </View> 
            <View style={styles.button}>
                <Button text="Konfirmasi" onPress={onSubmit}/>
            </View>
        </View>
    )
}

export default PesananDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',        
    },
    images:{
        width: 250,
        height: 250,
        marginBottom: 5,
        borderRadius: 15
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 15,
    },
    label: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        marginBottom: 8,
        color: '#020202',
  },
  button:{
   paddingHorizontal: 20,
   marginBottom: 5,
  }
})
