import axios from "axios";
import { API_HOST, getData } from "../../utils"

export const getRekapData = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/fetch-rekap`,{
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            
            console.log('Data Rekap', res)
        }).catch(err => {
            console.log(err.message)
        })
    })
}