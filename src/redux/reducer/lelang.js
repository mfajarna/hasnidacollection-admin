const initLelang = {
    dataLelang : [],
    statusLelang: [],
    pemenangLelang:[],
    historyLelang: []
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


    return state;
}