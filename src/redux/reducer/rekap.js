const initRekap = {
    rekap : []
}

export const RekapReducer = (state=initRekap, action) => {

    if(action.type ==='SET_REKAP')
    {
        return{
            ...state,
            rekap: action.value
        }
    }

    return state
}