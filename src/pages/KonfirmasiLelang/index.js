import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components'
import LelangTabSection from '../../components/molecules/LelangTabSection'

const KonfirmasiLelang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Konfirmasi Lelang" subTitle="Konfirmasi Lelang User Disini" onBack={() => navigation.navigate('LelangBarang')} />
            <View style={styles.content}>
                <LelangTabSection />
            </View>
        </View>
    )
}

export default KonfirmasiLelang

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    content:{
        flex: 1,
        backgroundColor: 'white'
    }
})
