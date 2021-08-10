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

const initTukar = {
    dataKonfirmasi : [],
    dataDikirimPembeli: [],
    dataKonfirmasiAdmin: [],
    dataDikirimAdmin: [],
    dataDiterimaPembeli: []
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

export const tukarReducer = (state = initTukar, action) => {
    if(action.type === "SET_KONFIRMASI_TUKAR")
    {
        return{
            ...state,
            dataKonfirmasi: action.value
        }
    }
    if(action.type === "SET_DIKIRIM_PEMBELI")
    {
        return{
            ...state,
            dataDikirimPembeli: action.value
        }
    }
    if(action.type === "SET_KONFIRMASI_ADMIN")
    {
        return{
            ...state,
            dataKonfirmasiAdmin: action.value
        }
    }
    if(action.type === "SET_DIKIRIM_ADMIN")
    {
        return{
            ...state,
            dataDikirimAdmin: action.value
        }
    }
    if(action.type === "SET_DITERIMA_PEMBELI")
    {
        return{
            ...state,
            dataDiterimaPembeli: action.value
        }
    }

    return state;
}