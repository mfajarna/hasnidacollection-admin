import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import {Button, DetailLelang, Gap, Headers, TextInput, TimeInput} from '../../components';
import { setLoading } from '../../redux/action';
import { API_HOST, getData, showMessage, useForm } from '../../utils';
const LelangDetail = ({route, navigation}) => {

    const {id,name,stock,price, types} = route.params
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [form,setForm] = useForm({
        bid: '',
        status: 'ON_PROGRESS'
    })
    const data = {
        id_collection : id,
        ...form
    }

    const updateStock = {
        stock : stock - 1
    }

    useEffect(() => {
        getData('token').then(res => {
            setToken(res.value);
        })
    }, [])

    const onClick = () => {
        dispatch(setLoading(true))
        if(form.bid === '')
        {
            showMessage('Data tidak boleh ada yang kosong!')
            dispatch(setLoading(false))
        }

        axios.all([
            axios.post(`${API_HOST.url}/lelang`, data, {
                headers : {
                    Authorization: token
                }
            }),
            axios.post(`${API_HOST.url}/collection/${id}`, updateStock, {
                headers: {
                    Authorization: token
                }
            })
        ]).then(axios.spread((res1,res2) => {
            navigation.reset({index: 0, routes:[{name:'LelangBarang'}]})
            dispatch(setLoading(false))
            showMessage('Lelang berhasil ditambahkan!', 'success');
        })).catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.page}>
           <Headers title="Lelang Detail" subTitle="Atur pengaturan lelang disini" onBack={() => navigation.goBack()} />
           <View style={styles.content}>
            <Text style={styles.desc}>Detail Lelang</Text>
            <DetailLelang name={name} stock={stock} price={price} type={types} />
            <Gap height={14} />
            <Text style={styles.desc}>Masukan jumlah minimal bid</Text>
            <Gap height={8} />
            <View style={styles.setTime}>
            <Text style={styles.desc}>Jumlah Bid</Text>
            <TimeInput 
            keyboardType="numeric"
            value={form.bid}
            onChangeText={value => setForm('bid', value)}
            />
            </View>
           </View>
           <View style={styles.button}>
            <Button text="Submit" onPress={onClick} />
           </View>
        </View>
    )
}

export default LelangDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content:{
        flex: 1,
    },
    desc:{
        fontSize: 15,
        fontFamily: "Nunito-Regular",
        color: "black",
        paddingHorizontal: 25,
    },
    button: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    setTime: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white",
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20, 
        paddingBottom: 10,   
    }
})
