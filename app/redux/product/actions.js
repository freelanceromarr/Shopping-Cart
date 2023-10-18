import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes"

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