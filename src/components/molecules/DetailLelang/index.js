import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyAdmin } from '../../../assets'
import Number from '../Number'

const DetailLelang = ({name, stock, type, price}) => {
    return (
        <View style={styles.page}>
            <View>
                <Image source={DummyAdmin} style={styles.img} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Nama Barang: {name}</Text>
                <Text style={styles.text}>Stock: {stock}</Text>
                <Text style={styles.text}>Tipe Barang: {type}</Text>
                <Text style={styles.text}>Harga: <Number type="currency" number={price}/></Text>
            </View>
        </View>
    )
}

export default DetailLelang

const styles = StyleSheet.create({
    page: {
        marginTop: 10,
        paddingHorizontal: 25,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        marginHorizontal: 23,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,    
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    content: {
        paddingHorizontal: 10,
    },
    text:{
        fontFamily: 'Nunito-Normal'
    }
})
