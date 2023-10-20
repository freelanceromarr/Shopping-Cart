'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = (props)=>{
    const carts=  useSelector(state=>state.cart)
   
    return (
    <>
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
            <a href="index.html">
                <img src="/images/logo.png" alt="LWS" className="max-w-[140px]" />
            </a>

            <div className="flex gap-4">
                <Link href="/" className="navHome" id="lws-home"> Home </Link>
                <Link href="/product" className="navHome" id="lws-home"> Add Product </Link>
                
                <Link href="/cart" className="navCart" id="lws-cart">
                <FontAwesomeIcon icon={faCartPlus} />
                <span id="lws-totalCart"> {carts.cartId.length} </span>
                </Link>
            </div>
            </div>
        </nav>
        {props.children}
    </>
    
    )
}

export default Navbar; 