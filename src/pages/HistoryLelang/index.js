import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {Headers,DetailPemenangLelang} from '../../components';
import { getHistoryLelang } from '../../redux/action';


const HistoryLelang = ({navigation}) => {
    const dispatch = useDispatch();
    const{historyLelang} = useSelector(state => state.lelangReducer);
    useEffect(() => {
        dispatch(getHistoryLelang());
    },[])
    return (
        <View style={styles.container}>
            <Headers title="History Lelang" subTitle="History lelang barang" onBack={()=> navigation.goBack()} />
            <ScrollView>
            <View style={styles.content}>
                {historyLelang.map(history => {
                    return(
                        <DetailPemenangLelang 
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

export default HistoryLelang

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
