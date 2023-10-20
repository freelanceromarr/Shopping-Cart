import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { cartDetails } from "./cart/actions";

const cartMiddlware = (store)=>(next)=>(action)=>{
    const products= store.getState().products;
    const carts= store.getState().cart;


    const cartItems= products.filter((product)=>carts.cartId.includes(product.id)) 

    const cartItemQuntity= products.map(product => {
        return carts.cartId.filter(cart => product.id === cart).length
    })
    

    const finalcart = cartItems.map((item, index) =>{
        return {...item, quantity: cartItemQuntity[index]}   
    })

    // store.dispatch(cartDetails(finalcart))

    next(action);
}

const store = createStore(rootReducer, applyMiddleware(cartMiddlware))

export default store;
