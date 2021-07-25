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