const initLelang = {
    dataLelang : [],
    statusLelang: [],
    pemenangLelang:[],
    historyLelang: [],
    dataTukarBarang: [],
    konfirmasiLelang: [],
    dikemasLelang: [],
    deliveryLelang: [],
    doneLelang: []
}

export const lelangReducer = (state = initLelang, action) => {
    if(action.type === "SET_LELANG")
    {
        return {
            ...state,
            dataLelang : action.value
        }
    }
    if(action.type === "SET_STATUS_LELANG")
    {
        return {
            ...state,
            statusLelang : action.value
        }
    }
    if(action.type === "SET_PEMENANG_LELANG")
    {
        return{
            ...state,
            pemenangLelang: action.value
        }
    }

    if(action.type === "SET_HISTORY_LELANG")
    {
        return{
            ...state,
            historyLelang: action.value
        }
    }
    
    if(action.type === "SET_TUKAR_BARANG")
    {
        return{
            ...state,
            dataTukarBarang: action.value
        }
    }
    if(action.type === "SET_KONFIRMASI_LELANG")
    {
        return{
            ...state,
            konfirmasiLelang: action.value
        }
    }

    if(action.type === "SET_KONFIRMASI_DIKEMAS")
    {
        return{
            ...state,
            dikemasLelang: action.value
        }
    }

    
    if(action.type === "SET_DELIVERY")
    {
        return{
            ...state,
            deliveryLelang: action.value
        }
    }

    
    if(action.type === "SET_DONE")
    {
        return{
            ...state,
            doneLelang: action.value
        }
    }

    return state;
}