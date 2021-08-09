import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { Ic_history_lelang, Ic_pemenang_lelang, Ic_status_lelang } from '../../../assets'

const LelangStatus = ({label, onPress}) => {

    const Icon = () => {
        if(label === 'Status Lelang')
        {
            return (
                <Ic_status_lelang />
            )
        }

        if(label === 'Pemenang Lelang')
        {
            return (
                <Ic_pemenang_lelang />
            )
        }

        if(label === 'Konfirmasi Lelang')
        {
            return (
                <Ic_pemenang_lelang />
            )
        }

        if(label === 'History Lelang')
        {
            return(
                <Ic_history_lelang />
            )
        }

        return (
            <Ic_pemenang_lelang />
        )
    }

    return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
        <View style={styles.content}>
            <Icon />
            <Text style={styles.text}>{label}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default LelangStatus

const styles = StyleSheet.create({
    container: {
    height: 80,
    width: 80,   
    backgroundColor: '#FFFED8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 3,
  },
  content: {
      alignItems: 'center',
      textAlign: 'center',

  }
})
