import { useSelector } from "react-redux";

const ProductListing =({product})=>{
    
    return (
        <div class="productContainer" id="lws-productContainer">
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
                            <button class="lws-btnAddToCart">Add To Cart</button>
                        </div>
                    </div>
                    
                   
                </div>
    )
}
export default ProductListing;