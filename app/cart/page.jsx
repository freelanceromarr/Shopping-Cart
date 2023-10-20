'use client'
import Navbar from "../component/Navbar";
import Billings from "../component/cart/Billings";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "../redux/cart/actions";
import { addQuantity, removeQuantity, restoreQunatityOnCartDelete } from "../redux/product/actions";

const Cart = ()=>{
const carts = useSelector(state=>state.cart)
const products = useSelector(state=>state.products)
const dispatch = useDispatch()
    console.log(carts);
const {cartDetails} = carts;


console.log(carts);

    const cartItems= products.filter((product, index)=>carts.cartId.includes(product.id)) 
    const finalcart = cartItems.map((item) =>{
        return {...item, quantity: carts.cartId.filter(cart => item.id === cart).length}
             
    })
console.log(cartItems);
    const increaseCartItem = (id)=>{
        dispatch(increaseQuantity(id))
        dispatch(removeQuantity(id))
    }
    const decreaseCartItem = (id)=>{
        dispatch(decreaseQuantity(id))
        dispatch(addQuantity(id))
    }
    const cartItemDeleteHandler = (id, quantity)=>{
        dispatch(deleteProduct(id))
        dispatch(restoreQunatityOnCartDelete(id, quantity))
    }
return (
        <>
            
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                    {/* <!-- Cart Item --> */}

                    {
                    finalcart.map(cartItem=> {
                        return  <div className="cartCard">
                        <div className="flex items-center col-span-6 space-x-6">
                        {/* <!-- cart image --> */}
                        <img className="lws-cartImage" src={cartItem.image} alt="product" />
                        {/* <!-- cart item info --> */}
                        <div className="space-y-2">
                            <h4 className="lws-cartName"> {cartItem.id} {cartItem.name}</h4>
                            <p className="lws-cartCategory">{cartItem.category}</p>
                            <p>USD <span className="lws-cartPrice"> {cartItem.price} </span></p>
                        </div>
                        </div>
                        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                        {/* <!-- amount buttons --> */}
                        <div className="flex items-center space-x-4">
                            <button  
                                onClick={()=>decreaseCartItem(cartItem.id)}
                                className="lws-incrementQuantity">
                            <i className="text-lg fa-solid fa-plus"><FontAwesomeIcon icon={faMinus} /></i>
                            </button>
                            <span className="lws-cartQuantity"> {cartItem.quantity} </span>
                            <button 
                                onClick={()=>increaseCartItem(cartItem.id)} 
                                className="lws-decrementQuantity">
                            <i className="text-lg fa-solid fa-minus"><FontAwesomeIcon icon={faPlus} /></i>
                            </button>
                        </div>
                        {/* <!-- price --> */}
                        <p className="text-lg font-bold">USD <span className="lws-calculatedPrice">{parseFloat(cartItem.price)*parseFloat(cartItem.quantity)}</span></p>
                        </div>
                        {/* <!-- delete button --> */}
                        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                        <button 
                            onClick={() => cartItemDeleteHandler(cartItem.id, cartItem.quantity)}
                            className="lws-removeFromCart">
                           
                            <i className="text-lg text-red-400"> <FontAwesomeIcon icon={faTrash} /></i>
                        </button>
                        </div>
                    </div>
                    })
                    }

                   
                    {/* <!-- Cart Items Ends --> */}

                    </div>

                    {/* <!-- Bill Details --> */}
                        <Billings cart={finalcart}/>
                </div>
                </div>
            </main>
        </>
            
    )
}

export default Cart;