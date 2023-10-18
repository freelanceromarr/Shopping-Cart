import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes"

const initialState = [
    {
        id: 1,
        name: "Mackbook 15 pro max",
        category: 'Laptop',
        price: 1500, 
        quantity: 20,
        image: "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
    }        
]

const productReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type) {
        case ADDPRODUCT:
            return [
                ...state, 
                payload
            ]
        case ADDQUANTITY:
            return state.map(product => {
                if (product.id === payload) {
                    return {...product, quantity: parseFloat(product.quantity) + 1}
                }return product
            })
        case REMOVEQUANTITY:
            return state.map(product => {
                if (product.id === payload) {
                    return {...product, quantity: parseFloat(product.quantity) - 1}
                }return product
            })
        default:
            return state;
    }
}

export default productReducer;