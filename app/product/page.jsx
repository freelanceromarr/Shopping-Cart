'use client'
import { useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import AddProduct from "../component/product/AddProduct";
import ProductListing from "../component/product/ProductListing";




const Product = () =>{
const products = useSelector(state=>state.products)
    console.log(products);
    return(
    <div>
      
            <Navbar/>

            <main className="py-16">
                <div className="productWrapper">
                {/* <!-- products container --> */}
                {
                    products.map((product) =>{
                        return <ProductListing key={product.id} product={product}/>
                    })
                }
                {/* <!-- products container ends --> */}
                    <AddProduct/>
                </div>
            </main>
        
    </div>
)}

export default Product;