import axios from "axios";


export const getCostumerData = () => (dispatch) => {
    axios.get('http://ecommerce.iottelnet.com/api/listUser?roles=USER')
    .then(res => {
        dispatch({type: 'SET_COSTUMER', value: res.data.data.data})
    }).catch(err => {
        console.log(err.message)
    })
}