import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {DetailPemenangLelang, Headers} from '../../components'
import { getHistoryLelang } from '../../redux/action'

const BarangLelang = ({navigation}) => {

    const dispatch = useDispatch();
    const{historyLelang} = useSelector(state => state.lelangReducer);

    useEffect(() => {
        dispatch(getHistoryLelang());
    },[])

    return (
        <View style={styles.container}>
            <Headers title="Barang Lelang" subTitle="list barang yang sudah dilelang" onBack={() => navigation.reset({index: 0, routes:[{name: 'LelangBarang'}]})} />
            <ScrollView>
            <View style={styles.content}>
                {historyLelang.map(history => {
                    return(
                        <DetailPemenangLelang
                        key={history.id} 
                        image={history.collection.picturePath} 
                        nama={history.collection.name}
                        desc={history.collection.description}
                        type="detail-lelang"
                        date={history.updated_at}
                        status={history.status}
                        jumlah_bid={history.bid}
                        onPress={() => navigation.navigate('PemenangLelang', history)}
                        />
                    )
                })}
            </View>
            </ScrollView>
        </View>
    )
}

export default BarangLelang

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 5,
    }
})
