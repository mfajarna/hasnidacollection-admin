import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
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
            <View style={styles.contentBox}>
                <TouchableOpacity style={styles.buttonKonfirmasi} onPress={() => navigation.navigate('DetailTukarBarang')}>
                    <Text style={styles.textConfirmasi}>Lihat Detail Konfirmasi</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>List Konfirmasi Tukar Barang</Text>
            <Gap height={10} />
            <View style={styles.content}>
                <ScrollView>
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
                </ScrollView>
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
        marginBottom: 10
    },
    buttonKonfirmasi:{
        padding : 9,
        backgroundColor: '#50CB93',
        width: 170,
        borderRadius: 8
    },
    contentBox:{
        paddingHorizontal: 20,
        marginBottom: 10
    },
    textConfirmasi:{
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: 'white'
    }
})
