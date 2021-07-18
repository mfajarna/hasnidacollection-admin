import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'

const ListCostumer = ({onPress, image, name, email}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                 <View style={styles.content}>
                    <Image source={image} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ListCostumer

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
   
    },
    header:{
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        marginBottom: 15,
    },
    content:{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center',
        borderBottomWidth: 0.5,
    },
    title : {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
        color: '#020202',
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    }
})
