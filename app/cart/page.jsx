'use client'
import Navbar from "../component/Navbar";
import Billings from "../component/cart/Billings";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

const Cart = ()=>{

    const products = useSelector(state=>state.products)
    const cart = useSelector(state=>state.cart)
    console.log(cart);
    
    
    
    const cartItems= products.filter((product, index)=>cart.includes(product.id))
   
    const cartItemQuntity= products.map(product => {
        return cart.filter(cart => product.id === cart).length
    })
    

    const finalcart = cartItems.map((item, index) =>{
        return {...item, quantity: cartItemQuntity[index]}
             
    })
    console.log(finalcart);
    return (
        <>
            <Navbar cart ={finalcart}/>
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
                            <h4 className="lws-cartName">{cartItem.name}</h4>
                            <p className="lws-cartCategory">{cartItem.category}</p>
                            <p>USD <span className="lws-cartPrice"> {cartItem.price} </span></p>
                        </div>
                        </div>
                        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                        {/* <!-- amount buttons --> */}
                        <div className="flex items-center space-x-4">
                            <button className="lws-incrementQuantity">
                            <i className="text-lg fa-solid fa-plus"><FontAwesomeIcon icon={faPlus} /></i>
                            </button>
                            <span className="lws-cartQuantity"> {cartItem.quantity} </span>
                            <button className="lws-decrementQuantity">
                            <i className="text-lg fa-solid fa-minus"><FontAwesomeIcon icon={faMinus} /></i>
                            </button>
                        </div>
                        {/* <!-- price --> */}
                        <p className="text-lg font-bold">USD <span className="lws-calculatedPrice">{parseFloat(cartItem.price)*parseFloat(cartItem.quantity)}</span></p>
                        </div>
                        {/* <!-- delete button --> */}
                        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                        <button className="lws-removeFromCart">
                           
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