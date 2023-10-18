import { ADDTOCART, DELETECART, QUANTITYDECREMENT, QUNANTITYINCREMENT } from "./actionTypes"

export const addTocart = (productId) =>{
    return {
        type: ADDTOCART, 
        payload: productId
    }
}

export const increaseQuantity = (productId) =>{
    return {
        type: QUNANTITYINCREMENT, 
        payload: productId
    }
}

export const decreaseQuantity = (productId) =>{
    return {
        type: QUANTITYDECREMENT, 
        payload: productId
    }
}
export const deleteProduct = (productId) =>{
    return {
        type: DELETECART, 
        payload: productId
    }
}