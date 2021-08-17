import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Gap, Headers, Select, Number } from '../../components'
import { getRekapData } from '../../redux/action'
import { API_HOST, getData, useForm } from '../../utils'

const RekapPembelian = ({navigation}) => {

    const[form,setForm] = useForm({
        month: '',
    })
    const[data,setData] = useState();
    const[dataQuantity,setDataQuantity] = useState();
    const[dataItem,setDataItem] = useState({});

    
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const d = new Date();
        const month = monthNames[d.getMonth()]
        const year = d.getFullYear();
        const formMonth = form.month - 1;
        const monthPick = monthNames[formMonth];

    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/fetch-rekap?month=${form.month}`,{
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            setData(res.data.data)
        }).catch(e => {
            console.log(e.message)
        })
    })


    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/fetch-quantity?month=${form.month}`,{
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            setDataQuantity(res.data.data)
        }).catch(e => {
            console.log(e.message)
        })
    })

        // getData('token').then(resToken => {
        //     axios.get(`${API_HOST.url}/fetch-item?month=${form.month}`,{
        //         headers:{
        //             Authorization: resToken.value
        //         }
        //     }).then(res => {
        //         setDataItem(res.data.data)
              
        //     }).catch(e => {
        //         console.log(e.message)
        //     })
        // })




    return (
        <View style={styles.container}>
           <Headers title="Rekap Penjualan" subTitle="Lihat Rekap Penjualan" onBack={()=> navigation.navigate('Pembelian')} />
           <View style={styles.content}>
                <Text style={styles.text}>Pilih Rekap Bulan {monthPick} {year}</Text>
                <Gap height={20}/>
                <Select
                    label="Pilih Bulan" 
                    type="month"
                    value={form.month}
                    onSelectChange={(value) => setForm('month',value)}
                />
                <Gap height={20}/>
                <Text style={styles.desc}>Total Penjualan sebesar : <Number number={data}/> </Text>
                <Text style={styles.desc}>Barang terjual sebanyak : {dataQuantity} </Text>
                
           </View>
        </View>
    )
}

export default RekapPembelian

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex:1 ,
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
    text:{
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold'
    },
    desc:{
        fontSize: 15,
        fontFamily: 'Nunito-SemiBold'
    }
})
