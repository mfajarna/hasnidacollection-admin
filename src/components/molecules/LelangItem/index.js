import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusLelang } from '../../../redux/action';
import DetailStatusLelang from '../DetailStatusLelang';

const LelangItem = () => {

    const dispatch = useDispatch();
    const{statusLelang} = useSelector(state => state.lelangReducer);

    useEffect(() => {
        dispatch(getStatusLelang());
    }, []);

    return (
        <View style={styles.container}>
            {statusLelang.map(status => {
                return(
                    <DetailStatusLelang 
                        key={status.id}
                        id={status.id}
                        image={status.collection.picturePath}
                        name={status.collection.name}
                        stock={status.collection.stock}
                        status={status.status}
                        bid={status.bid}
                    />
                )
            })}
        </View>
    )
}

export default LelangItem

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
