const initLelang = {
    dataLelang : [],
    statusLelang: [],
    pemenangLelang:[]
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


    return state;
}