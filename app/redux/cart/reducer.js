import { ADDTOCART, DELETECART, QUANTITYDECREMENT, QUNANTITYINCREMENT } from "./actionTypes"

const initialState = []
const cartReducer = (state = initialState, action)=>{

    const {type, payload} = action;
    
    switch (type) {
        case ADDTOCART:
            return [
                ...state,
                payload
            ]
        case DELETECART:
            return state.filter(cartItem=> cartItem !== payload);
    
        default:
            return state;
    }


}
export default cartReducer;