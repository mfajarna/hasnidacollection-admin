import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { API_HOST, getData, showMessage } from '../../../utils'

const ItemTukarBarang = ({image,name,namaPembeli,status,id}) => {

    const navigation = useNavigation()


    console.log('id',id)
    const data = {
        status : 'DIKIRIM_ADMIN'
    }

    const dataDikirim = {
        status : 'KONFIRMASI_ADMIN'
    }

    const onSubmit = () => {
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/statusBarang/${id}`, data, {
                headers : {
                    Authorization: resToken.value
                }
            }).then(res => {
                console.log(res)
                showMessage('Berhasil update status', 'success');
                navigation.reset({index: 0, routes:[{name: 'TukarBarang'}]})
            })
        })
    }

        const onDikirim = () => {
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/statusBarang/${id}`, dataDikirim, {
                headers : {
                    Authorization: resToken.value
                }
            }).then(res => {
                console.log(res)
                showMessage('Berhasil update status', 'success');
                navigation.reset({index: 0, routes:[{name: 'TukarBarang'}]})
            })
        })
    }

    const renderButton = () => {
        if(status === 'KONFIRMASI_ADMIN')
        {
            return (
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text>Delivery</Text>
                </TouchableOpacity>
            )
        }
        if(status === 'DIKIRIM_PEMBELI')
        {
            return (
                <TouchableOpacity style={styles.button} onPress={onDikirim}>
                    <Text>Konfirmasi</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.desc}>Atas Nama: {namaPembeli}</Text>
                <Text style={styles.desc}>Status: {status}</Text>
            </View>
            <View style={styles.buttonBox}>
            {renderButton()}
            </View>
        </View>
    )
}

export default ItemTukarBarang

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center',
        borderBottomWidth: 1
    },
      image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    },
    text:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 15
    },
    desc:{
        fontFamily: 'Nunito-Light',
        fontSize: 13
    },
    button:{
        padding: 8,
        backgroundColor:'#50CB93',
        borderRadius: 6
    },
    buttonBox:{
        marginLeft: 15
    }
})
