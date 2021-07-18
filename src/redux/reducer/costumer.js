const initCustomer = {
    dataCostumer: []
}


export const costumerReducer = (state= initCustomer, action) => {
    if(action.type === 'SET_COSTUMER')
    {
        return {
            ...state,
            dataCostumer: action.value
        }
    }

    return state;
}