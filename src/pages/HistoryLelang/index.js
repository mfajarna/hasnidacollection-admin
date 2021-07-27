import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers,DetailPemenangLelang} from '../../components';


const HistoryLelang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="History Lelang" subTitle="History lelang barang" onBack={()=> navigation.goBack()} />
            <DetailPemenangLelang nama="Sepatu Gucci" nama_pemenang="Wahyu" jumlah_bid="Rp. 200.000" />
            <DetailPemenangLelang nama="Sepatu ardilles" nama_pemenang="Ruben" jumlah_bid="Rp. 500.000" />
        </View>
    )
}

export default HistoryLelang

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
