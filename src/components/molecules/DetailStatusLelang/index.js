import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Number} from '../../molecules'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { API_HOST, getData, showMessage } from '../../../utils'
import { useNavigation } from '@react-navigation/native'

const DetailStatusLelang = ({image,status,name,bid,id}) => {

    const navigation = useNavigation();
    const[token,setToken] = useState('');
    const data = {
        status : 'SELESAI'
    }

    useEffect(() => {
        getData('token').then(resToken => {
            setToken(resToken.value)
        })
    }, [])

    const onSubmit = () =>{
        axios.post(`${API_HOST.url}/lelang/${id}`, data , {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            showMessage('Behasil selesai lelang', 'success');
            navigation.reset({index: 0, routes:[{name: 'LelangBarang'}]})
        }).catch(err => {
            console.log(err.message);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.images} source={{ uri: image }}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                 <Text style={styles.text}>Minimal Bid: <Number number={bid} /></Text>
            <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={onSubmit}>
                <Text style={styles.textBayar}>Selesai</Text>
        </TouchableOpacity>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    )
}

export default DetailStatusLelang

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    images:{
        width: 50,
        height: 50,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        fontFamily: 'Nunito-Regular'
    },
    content:{
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 10
    },
    status:{
        justifyContent: 'center'
    },
    statusText:{
        fontSize: 12,
        fontFamily: 'Nunito-SemiBold',
        color: 'green'
    },
    buttonBayar: {
        backgroundColor: '#26B99A',
        padding: 6,
        borderRadius: 3,
  },
  textBayar:{
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
    textAlign: 'center'
  }
})
