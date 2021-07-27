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
    