import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyImg1 } from '../../assets'
import {DetailPemenangLelang, Headers} from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { getPemenangLelang } from '../../redux/action';

const PememangLelang = ({navigation, image,status,name,bid, route}) => {
    const{id} = route.params;
    const dispatch = useDispatch();

    const{pemenangLelang} = useSelector(state => state.lelangReducer);

    useEffect(() => {
     dispatch(getPemenangLelang(id))
    }, [])


    return (
        <View style={styles.container}>
            <Headers title="Pemenang Lelang" subTitle="User pemenang lelang" onBack={()=> navigation.goBack()} />
            {pemenangLelang.map(data => {
                return (
                    <DetailPemenangLelang
                        type="pemenang-lelang"
                        nama={data.collection.name}
                        image={data.collection.picturePath}
                        status={data.lelang.status}
                        bid={data.lelang.bid}
                        nama_pemenang={data.user.name}
                        jumlah_bid={data.jumlah_bid}
                        date={data.updated_at}
                    />
                    )
            })}
        </View>
    )
}

export default PememangLelang

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentBarang : {
        flexDirection: 'row',
        padding: 8,
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 25,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor:'white',
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
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
    textPemenang: {
        fontSize: 13,
        fontFamily: 'Nunito-Light'
    },
    textBayar:{
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold',
        color: 'white',
        textAlign: 'center'
  },
      status:{
        justifyContent: 'center'
    },
    statusText:{
        fontSize: 12,
        fontFamily: 'Nunito-SemiBold',
        color: 'green'
    },
})
