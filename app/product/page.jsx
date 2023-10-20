'use client'
import { useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import AddProduct from "../component/product/AddProduct";
import ProductListing from "../component/product/ProductListing";




const Product = () =>{
const products = useSelector(state=>state.products)
    
    return(
    <div>
      
           

            <main className="py-16">
                <div className="productWrapper">
                {/* <!-- products container --> */}
                    <div class="productContainer" id="lws-productContainer">
                    {
                        products.map((product) =>{
                            return <ProductListing key={product.id} product={product}/>
                        })
                    }
                </div>
                {/* <!-- products container ends --> */}
                    <AddProduct/>
                </div>
            </main>
        
    </div>
)}

export default Product;