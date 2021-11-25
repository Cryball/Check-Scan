const initialState = {
    currency: '₽'
}

const CHANGE_CURRENCY = "CHANGE_CURRENCY"

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            return { ...state, currency: action.payload }
        default:
            return state
    }
}

export const changeCurrencyAction = (payload) => ({
    type: CHANGE_CURRENCY,
    payload
})