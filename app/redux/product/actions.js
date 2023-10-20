import { ADDPRODUCT, ADDQUANTITY, DELETECARTITEM, REMOVEQUANTITY } from "./actionTypes"

export const addProduct =(product)=>{
    return {
        type: ADDPRODUCT,
        payload: product
    }
}

export const addQuantity =(productId)=>{
    return {
        type: ADDQUANTITY,
        payload: productId
    }
}

export const removeQuantity =(productId)=>{
    return {
        type: REMOVEQUANTITY,
        payload: productId
    }
}
export const restoreQunatityOnCartDelete =(cartId, cartQuantity )=>{
    return {
        type: DELETECARTITEM,
        payload: {cartId, cartQuantity}
    }
}