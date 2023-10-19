const Billings = ({cart})=>{
    function cartAmount(cart){
    let cartTotal= cart.reduce((total, cartItem)=>{
        return total += cartItem.price*cartItem.quantity
      }, 0) 
      
      return cartTotal;
    }
    console.log(cartAmount(cart));
    return (
        <div>
                    <div class="billDetailsCard">
                        <h4 class="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
                        <div class="space-y-4">
                        {/* <!-- sub total --> */}
                        <div class="flex items-center justify-between">
                            <p>Sub Total</p>
                            <p>USD <span class="lws-subtotal"> {cartAmount(cart)} </span></p>
                        </div>
                        {/* <!-- Discount --> */}
                        <div class="flex items-center justify-between">
                            <p>Discount</p>
                            <p>USD <span class="lws-discount">0</span></p>
                        </div>
                        {/* <!-- VAT --> */}
                        <div class="flex items-center justify-between">
                            <p>VAT</p>
                            <p>USD <span class="vat">0</span></p>
                        </div>
                        {/* <!-- Total --> */}
                        <div class="flex items-center justify-between pb-4">
                            <p class="font-bold">TOTAL</p>
                            <p class="font-bold">USD <span class="lws-total"> {cartAmount(cart)} </span></p>
                        </div>
                        <button class="placeOrderbtn">place order</button>
                        </div>
                    </div>
        </div>
    )
}
export default Billings;