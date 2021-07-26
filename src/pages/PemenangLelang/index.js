import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Headers} from '../../components'

const PememangLelang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Pemenang Lelang" subTitle="User pemenang lelang" onBack={()=> navigation.goBack()} />
        </View>
    )
}

export default PememangLelang

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
