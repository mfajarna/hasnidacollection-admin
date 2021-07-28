import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers, Gap, ItemValue } from '../../components'
import { getTukarBarang } from '../../redux/action'

const TukarBarang = ({navigation}) => {
    const dispatch = useDispatch();
    const {dataTukarBarang} = useSelector(state => state.lelangReducer);

    useEffect(() => {
        dispatch(getTukarBarang())
    },[])

    return (
        <View style={styles.container}>
            <Headers title="Tukar Barang" subTitle="Atur Tukar Barang Disini" onBack={() => navigation.navigate('MainApp')} />
            <Text style={styles.text}>List Konfirmasi Tukar Barang</Text>
            <Gap height={10} />
            <View style={styles.content}>
                {dataTukarBarang.map(data => {
                    return(
                        <TouchableOpacity style={styles.containerContent} onPress={() => navigation.navigate('OrderDetail', data)}>
                            <ItemValue label="Nama Barang" value={data.collection.name} />
                            <ItemValue label="Deskripsi Barang" value={data.collection.description} />
                            <ItemValue label="Oleh" value={data.users.name} />
                            <ItemValue label="Alasan Tukar Barang" value={data.alasan_tukar_barang} />
                            <ItemValue label="Status" value={data.status} valueColor="#D54C4C" />
                        </TouchableOpacity>
                        )
                })}
            </View>
        </View>
    )
}

export default TukarBarang

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25,
    },
    text:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        paddingHorizontal: 20
    },
    containerContent:{
        padding : 9,
        backgroundColor: '#FAEBE0',
        borderRadius: 10,
    }
})
