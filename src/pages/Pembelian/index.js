import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Headers, HomeTabSection, SearchInput } from '../../components'

const Pembelian = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title="Pembelian" subTitle="Silahkan memilih barang favoritmu" onBack={()=> navigation.reset({index: 0, routes:[{name: 'MainApp'}]})}/>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Koleksi')}>
                    <Text style={styles.text}>+ Collection</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
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
        paddingHorizontal: 25
    },
    button:{
        padding: 8,
        backgroundColor:'#71EFA3',
        width: 100,
        borderRadius: 7
    },
    text:{
        fontFamily: 'Nunito-SemiBold',
        color: 'white',
        textAlign: 'center'
    }
})
