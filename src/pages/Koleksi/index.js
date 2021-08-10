import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers} from '../../components';

const Koleksi = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Koleksi" subTitle="Input Koleksi Disini" onBack={() => navigation.goBack()} />
            <Text></Text>
        </View>
    )
}

export default Koleksi

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})
