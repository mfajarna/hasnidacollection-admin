import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers, TukarBarangTabSection} from '../../components'

const DetailTukarBarang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Detail Tukar Barang" subTitle="Detail tukar barang disini" onBack={() => navigation.goBack()}/>
            <View style={styles.content}>
                <TukarBarangTabSection />
            </View>
        </View>
    )
}

export default DetailTukarBarang

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor:'white'
    }
})
