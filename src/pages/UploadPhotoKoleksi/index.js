import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {Headers, Button} from '../../components';
import ImagePicker from 'react-native-image-picker';
import { API_HOST, getData, showMessage } from '../../utils';
import axios from 'axios';
import { useEffect } from 'react';

const UploadPhotoKoleksi = ({navigation,route}) => {
    const {data} = route.params;
    const [photo,setPhoto] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const {koleksiReducer} = useSelector(state => state)

    useEffect(() =>{
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])

    console.log(data.data.id)

    const addPhoto = () => {
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                maxWidth: 1200,
                maxHeight: 900
            },
            (response) => {
                console.log('Response', response)

                if(response.didCancel || response.error)
                {   
                    showMessage('Anda tidak memilih foto!')
                }else{
                    const source = {uri: response.uri}
                    const dataImage = {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName
                    };
                    setPhoto(source);
                    dispatch({type: 'SET_PHOTO_KOLEKSI', value: dataImage});
                    dispatch({type:'SET_STATUS_UPLOAD_KOLEKSI', value: true})
                }
            }
        )
    }


    const onSubmit = () =>{
        if(koleksiReducer.isUploadPhoto)
        {
            const photoForUpload = new FormData();
            photoForUpload.append('file', koleksiReducer);

            console.log("photo for upload",photoForUpload)

            console.log(data.data.id)
            const id = data.data.id;
            
            axios.post(`${API_HOST.url}/collection-update-photo/${id}`, photoForUpload,{
                headers:{
                    Authorization: token,
                    'Content-Type':'multipart/form-data',
                }
            }).then(resData => {
                console.log('data foto',resData)
                data.data.picturePath = `http://27.112.78.10/storage/${resData.data.data[0]}`;
        
               navigation.navigate('UploadPhotoBarcode', data)
            }).catch(err => {
                console.log(err.message)
                showMessage('Gagal Upload Foto Koleksi');
            })
        }
    }

    return (
        <View style={styles.container}>
            <Headers title="Upload Koleksi" subTitle="Upload Foto Koleksi" onBack={() => navigation.reset({index: 0, routes:[{name:'Koleksi'}]})} />
            <View style={styles.content}>
                <View style={styles.photoContent}>
                    <TouchableOpacity onPress={addPhoto}>
                        <Text style={styles.photoPembayaran}>Add Photo</Text>
                    </TouchableOpacity>
                    {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}></Text>
                    </View>}
                </View> 
                <View style={styles.button}>
                    <Button text="Upload Foto Koleksi" color="#66B49D" textColor="white" onPress={onSubmit} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhotoKoleksi

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        padding: 25,
    },
    photoImage:{
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    photoContent:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      paddingBottom: 40,
  },
    button:{
      paddingHorizontal: 20,
      backgroundColor: 'white',
      paddingBottom: 10,
  },
})
