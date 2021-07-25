import axios from "axios"
import { API_HOST } from "../../utils"

export const getCollectionData = () => (dispatch) => {
    axios.get('http://ecommerce.iottelnet.com/api/collection')
    .then(res => {
        dispatch({type: 'SET_FOOD', value: res.data.data.data})
    }).catch(err => {
        console.log(err)
    })
}

export const getCollectionDataByTypes = (types) => (dispatch) => {
    axios.get(`http://27.112.78.10/api/collection?types=${types}`)
    .then(res => {
        if(types === 'new_collection')
        {
            dispatch({type: 'SET_NEW_COLLECTION', value: res.data.data.data})
        } if(types === 'popular')
        {
            dispatch({type: 'SET_POPULAR', value: res.data.data.data})
        }   if(types === 'recommended')
        {
            dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data})
        }

       
    }).catch(err => {
        console.log(err)
    })
}
