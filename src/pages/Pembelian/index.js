import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Headers, HomeTabSection, PembelianTabSection, SearchInput } from '../../components'

const Pembelian = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title="Pembelian" subTitle="Silahkan memilih barang favoritmu" onBack={()=> navigation.reset({index: 0, routes:[{name: 'MainApp'}]})}/>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Koleksi')}>
                    <Text style={styles.text}>+ Collection</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RekapPembelian')}>
                    <Text style={styles.text}>Lihat Rekap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
                <PembelianTabSection />
            </View>
        </View>
    )
}

export default Pembelian

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    tabContainer:{
        flex: 1,
    },
    content:{
        backgroundColor:'white',
        paddingHorizontal: 25,
        flexDirection: 'row',
       
    },
    button:{
        padding: 8,
        backgroundColor:'#71EFA3',
        width: 100,
        borderRadius: 7,
         marginRight: 5
    },
    text:{
        fontFamily: 'Nunito-SemiBold',
        color: 'white',
        textAlign: 'center'
    }
})
