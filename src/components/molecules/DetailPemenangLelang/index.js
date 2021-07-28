import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyImg1 } from '../../../assets'
import Number from '../Number'

const DetailPemenangLelang = ({nama,status,nama_pemenang,jumlah_bid,type,date,image,desc,onPress,bid}) => {

    const renderContent = () => {
        switch (type)
        {
            case 'pemenang-lelang':
                 const formatedDatex = new Date(date).toDateString();
                return(
                <View style={styles.contentBarang}>
                    <View style={styles.image}>
                        <Image style={styles.images} source={{ uri:image }}/>
                    </View>
                <View style={styles.content}>
                        <Text style={styles.text}>{nama}</Text>
                        <Text style={styles.text}>Nama Pemenang:</Text>
                        <Text style={styles.textPemenang}>{nama_pemenang}</Text>
                        <Text style={styles.textPemenang}>Jumlah Bid: <Number number={jumlah_bid} /></Text>
                        <Text style={styles.textPemenang}>Waktu Lelang: {formatedDatex}</Text>
                </View>
                    <View style={styles.status}>
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                 </View>
                );

            case 'detail-lelang':
                const formatedDate = new Date(date).toDateString();
                return(
                  <TouchableOpacity style={styles.contentBarang} onPress={onPress}>
                        <View style={styles.image}>
                            <Image style={styles.images} source={{ uri:image }}/>
                        </View>
                        <View style={styles.content}>
                                <Text style={styles.text}>{nama}</Text>
                                <Text style={styles.textPemenang}>{desc}</Text>
                                <Text style={styles.textPemenang}>Selesai pada: {formatedDate}</Text>
                                <Text style={styles.textPemenang}>Jumlah Bid: <Number number={jumlah_bid} /></Text>
                        </View>
                    <View style={styles.status}>
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                </TouchableOpacity>
                 
                )

                case 'history-lelang':
                const formatedDatei = new Date(date).toDateString();
                return(
                  <View style={styles.contentBarang}>
                        <View style={styles.image}>
                            <Image style={styles.images} source={{ uri:image }}/>
                        </View>
                        <View style={styles.content}>
                                <Text style={styles.text}>{nama}</Text>
                                <Text style={styles.textPemenang}>{desc}</Text>
                                <Text style={styles.textPemenang}>Selesai pada: {formatedDatei}</Text>
                                <Text style={styles.textPemenang}>Jumlah Bid: <Number number={jumlah_bid} /></Text>
                        </View>
                    <View style={styles.status}>
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                </View>
                 
                )
        }
    }


    return (
            <>
                   {renderContent()}
            </>
    )
}

export default DetailPemenangLelang

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
        borderRadius: 30,
        marginLeft: -15
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
    content:{
        paddingHorizontal: 5,
    }
})
