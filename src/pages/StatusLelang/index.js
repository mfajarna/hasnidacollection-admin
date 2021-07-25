import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Headers, Timer } from '../../components'
import BackgroundTimer from "react-native-background-timer";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setTimer } from '../../redux/action';
const StatusLelang = ({navigation, route}) => {
    
    return (
        <View style={styles.container}>
            <Headers title="Status Lelang" subTitle="Lihat Status Lelang" onBack={() => navigation.navigate('LelangBarang')} />
            <View style={styles.content}>
                
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
    }

})
