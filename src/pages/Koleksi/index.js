import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {Button, Gap, Headers, TextInput} from '../../components';
import { API_HOST, getData, showMessage, useForm } from '../../utils';
import {Select} from '../../components';
import axios from 'axios';

const Koleksi = ({navigation}) => {

    const[form,setForm] = useForm({
           name: '',
           description: '',
           stock: '',
           price: '',
           types: '',
           category: '',
           url_barcode:'',
    });

    const onSubmit = () => {

        if(form.category === "")
        {
            alert('Kategori tidak boleh kosong')
            return false
        }
        if(form.types === "")
        {
           alert('Tipe tidak boleh kosong')
           return false
        }
        if(form.rate > 5)
        {
            alert('Rating tidak boleh dari 5')
            return false
        }
            
        // console.log('form submit', form)

        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/collection-create`, form , {
                headers: {
                    Authorization: resToken.value
                }
            }).then(res => {
                console.log(res);
                navigation.navigate('UploadPhotoKoleksi', res)
        
            }).catch(err => {
                console.log(err.message)
                showMessage('Gagal input data');
            })
        })
    }

    return (
        <View style={styles.container}>
            <Headers title="Koleksi" subTitle="Input Koleksi Baru Disini" onBack={() => navigation.navigate('Pembelian')} />
            <View style={styles.content}>
                <ScrollView>
                <TextInput 
                    label="Nama Koleksi" 
                    placeholder="Masukan Nama Koleksi"  
                    value={form.name}
                    onChangeText={(value) => setForm('name', value)} />
                <Gap height={8} />

                <TextInput 
                    label="Deskripsi Koleksi" 
                    placeholder="Masukan Deskripsi Koleksi"  
                    value={form.description}
                    onChangeText={(value) => setForm('description', value)} />
                <Gap height={8} />

                <TextInput 
                    label="Url Barcode" 
                    placeholder="Masukan Url Barcode Koleksi"  
                    value={form.url_barcode}
                    onChangeText={(value) => setForm('url_barcode', value)} />
                <Gap height={8} />

                <Select 
                    label="Pilih Tipe" 
                    type="tipe"
                    value={form.types}
                    onSelectChange={(value) => setForm('types',value)}
                />
                <Gap height={8} />
                <Select
                    label="Pilih Kategori" 
                    type="category"
                    value={form.category}
                    onSelectChange={(value) => setForm('category',value)}
                />
                <Gap height={8} />

                <TextInput 
                    label="Harga" 
                    placeholder="Masukan Harga Koleksi"  
                    value={form.price}
                    keyboardType="numeric"
                    onChangeText={(value) => setForm('price', value)} />
                <Gap height={8} />

                <TextInput 
                    label="Stock" 
                    placeholder="Masukan Stock Koleksi"  
                    value={form.stock}
                    keyboardType="numeric" 
                    onChangeText={(value) => setForm('stock', value)} />
                <Gap height={10} />
                
                </ScrollView>
                <View style={styles.button}>
                     <Button text="Selanjutnya" onPress={onSubmit}  />
                </View>
            </View>
        </View>
    )
}

export default Koleksi

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
    button:{
        marginBottom: 20,
        paddingTop: 10
    }
})
