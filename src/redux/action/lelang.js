import axios from "axios";
import { getData } from "../../utils";


export const getStatusLelang = () => dispatch => {
    getData('token').then(resToken => {
        axios.get('http://27.112.78.10/api/fetchLelang?status=ON_PROGRESS', {
            headers: {
                Authorization : resToken.value
            }
        }).then(resData => {
            dispatch({type: 'SET_STATUS_LELANG', value: resData.data.data.data})
        }).catch(err => {
            console.log(err.message)
        })
    })
}

export const getHistoryLelang = () => dispatch => {
    getData('token').then(resToken => {
        axios.get('http://27.112.78.10/api/fetchLelang?status=SELESAI', {
            headers: {
                Authorization : resToken.value
            }
        }).then(resData => {
            dispatch({type: 'SET_HISTORY_LELANG', value: resData.data.data.data})
        }).catch(err => {
            console.log(err.message)
        })
    })
}

export const getPemenangLelang = (id) => dispatch => {
    getData('token').then(resToken => {
        axios.get(`http://27.112.78.10/api/getPemenang?id_lelang=${id}`, {
            headers: {
                Authorization : resToken.value
            }
        }).then(resData => {
            dispatch({type: 'SET_PEMENANG_LELANG', value: resData.data.data.data})
            console.log(resData);
        }).catch(err => {
            console.log(err.message)
        })
    })
}

export const getTukarBarang = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`http://27.112.78.10/api/allBarang`, {
            headers: {
                Authorization : resToken.value
            }
        }).then(resData => {
            dispatch({type: 'SET_TUKAR_BARANG', value: resData.data.data.data})
            console.log(resData);
        }).catch(err => {
            console.log(err.message)
        })
    })
}

export const getKonfirmasiLelang = (status) => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang-admin?status=${status}`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_KONFIRMASI_LELANG', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDikemasLelang = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang-admin?status=KONFIRMASI`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_KONFIRMASI_DIKEMAS', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDeliveryLelang = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang-admin?status=ON_DELIVERY`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_DELIVERY', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDoneLelang = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang-admin?status=DONE`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_DONE', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}