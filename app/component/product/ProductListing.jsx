import { addTocart } from "@/app/redux/cart/actions";
import { removeQuantity } from "@/app/redux/product/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductListing =({product})=>{
    const carts = useSelector(state=>state.cart)
    // console.log(carts);
    const dispatch = useDispatch()
    const addTocartHandler = (productId)=>{
        dispatch(addTocart(productId))
        dispatch(removeQuantity(productId))
    }
    return (
       <>
                    {/* <!-- product item --> */}
                    <div class="lws-productCard">
                        <img class="lws-productImage" src={product.image} alt="product" />
                        <div class="p-4 space-y-2">
                            <h4 class="lws-productName">{product.name}</h4>
                            <p class="lws-productCategory"> {product.category} </p>
                            <div class="flex items-center justify-between pb-2">
                            <p class="productPrice">USD <span class="lws-price">${product.price} </span></p>
                            <p class="productQuantity">QTY <span class="lws-quantity"> {product.quantity} </span></p>
                            </div>
                            <button onClick={()=>addTocartHandler(product.id)} class="lws-btnAddToCart">Add To Cart</button>
                        </div>
                    </div>
                    
                   
                </>
    )
}
export default ProductListing;