import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Headers, LelangItem, Timer } from '../../components'
;
const StatusLelang = ({navigation, route}) => {

    const data = route.params;

    return (
        <View style={styles.container}>
            <Headers title="Status Lelang" subTitle="Lihat Status Lelang" onBack={() => navigation.navigate('LelangBarang')} />

            <View style={styles.content}>
                <Text style={styles.text}>List Status Lelang</Text>
                <LelangItem />
            </View>
        </View>
    )
}

export default StatusLelang

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    content:{
        flex: 1,
        paddingHorizontal: 20,
     
    },
    text:{
        marginBottom: 20,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 17,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
    }

})
