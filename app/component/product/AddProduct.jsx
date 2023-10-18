'use client'

import { addProduct } from "@/app/redux/product/actions"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// id generator 
function genID(products) {
    const maxId=   products.reduce(function(maxId, product) {
        return Math.max(maxId, product.id)
    }, 0)
    return maxId +1 ; 
}
const AddProduct =()=>{
    const products = useSelector(state=>state)
    const dispatch = useDispatch()
    const [input, setInput]= useState({
        id:"",
        name: '',
        category:'',
        price: 0,
        image: "",
        quantity: 0,

    })
    // add product 
    const addProductHandler =(event)=>{
        event.preventDefault()
        dispatch(addProduct({...input, id: genID(products)}))
        setInput({
            id:"",
            name: '',
            category:'',
            price: 0,
            image: "",
            quantity: 0,
    
        })
    }
    return (
        <div>
                    {/* <!-- Product Input Form --> */}
                    <div class="formContainer">
                    <h4 class="formTitle">Add New Product</h4>
                    <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={addProductHandler}>
                        {/* <!-- product name --> */}
                        <div class="space-y-2">
                        <label for="lws-inputName">Product Name</label>
                        <input onChange={e=>setInput({...input, name: e.target.value})} value={input.name} class="addProductInput" id="lws-inputName" type="text" required />
                        </div>
                        {/* <!-- product category --> */}
                        <div class="space-y-2">
                        <label for="lws-inputCategory">Category</label>
                        <input onChange={e=>setInput({...input, category: e.target.value})} value={input.category} class="addProductInput" id="lws-inputCategory" type="text" required />
                        </div>
                        {/* <!-- product image url --> */}
                        <div class="space-y-2">
                        <label for="lws-inputImage">Image Url</label>
                        <input onChange={e=>setInput({...input, image: e.target.value})} value={input.image} class="addProductInput" id="lws-inputImage" type="text" required />
                        </div>
                        {/* <!-- price & quantity container --> */}
                        <div class="grid grid-cols-2 gap-8 pb-4">
                        {/* <!-- price --> */}
                        <div class="space-y-2">
                            <label for="ws-inputPrice">Price</label>
                            <input onChange={e=>setInput({...input, price: e.target.value})} value={input.price} class="addProductInput" type="number" id="lws-inputPrice" required />
                        </div>
                        {/* <!-- quantity --> */}
                        <div class="space-y-2">
                            <label for="lws-inputQuantity">Quantity</label>
                            <input onChange={e=>setInput({...input, quantity: e.target.value})} value={input.quantity} class="addProductInput" type="number" id="lws-inputQuantity" required />
                        </div>
                        </div>
                        {/* <!-- submit button --> */}
                        <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
                    </form>
                    </div>
                    {/* <!-- Product Input Form Ends --> */}
        </div>
    )
}

export default AddProduct; 