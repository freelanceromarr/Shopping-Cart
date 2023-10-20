import { ADDTOCART, CARTDETAILS, DELETECART, QUANTITYDECREMENT, QUNANTITYINCREMENT } from "./actionTypes"

const initialState = {
    cartId: [],
    cartDetails: []
}
const cartReducer = (state = initialState, action)=>{

    const {type, payload} = action;
    
    switch (type) {
        case ADDTOCART:
            return {
                ...state,
                cartId: [...state.cartId, payload]
            }
            
        case DELETECART:
            return {
                ...state,
                cartId: state.cartId.filter(cartItem=> cartItem !== payload)
            }
        case QUNANTITYINCREMENT:
            return {
                ...state,
                cartId:[...state.cartId, payload] 
            }
        case QUANTITYDECREMENT:
            const filterforRemove = state.cartId.filter(cartItem=> cartItem == payload).splice(1, state.cartId.length)
            const restFiltered = state.cartId.filter(cartItem=> cartItem !== payload)
            return {
                ...state,
                cartId: [...restFiltered, ...filterforRemove]
            }
        case QUANTITYDECREMENT:
                
                return {
                    ...state,
                    cartId: state.cartId.filter(cartItem=> cartItem !== payload)
                }
        default:
            return state;
    }


}
export default cartReducer;