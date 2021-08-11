const initUploadPhoto = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
}

const initUploadPhotoBarcode = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
}


export const koleksiReducer = (state=initUploadPhoto, action) => {
    if(action.type === 'SET_PHOTO_KOLEKSI')
    {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name
        }
    }
    if(action.type === 'SET_STATUS_UPLOAD_KOLEKSI')
    {
        return {
            ...state,
            isUploadPhoto: action.value
        }
    }

    return state;
}

export const barcodeReducer = (state=initUploadPhotoBarcode, action) => {
    if(action.type === 'SET_PHOTO_BARCODE')
    {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name
        }
    }
    if(action.type === 'SET_STATUS_UPLOAD_BARCODE')
    {
        return {
            ...state,
            isUploadPhoto: action.value
        }
    }

    return state;
}