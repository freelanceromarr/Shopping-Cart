import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Navbar = ()=>{
    return (
    <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
        <a href="index.html">
            <img src="/images/logo.png" alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
            <Link href="/product" className="navHome" id="lws-home"> Home </Link>
            
            <Link href="/cart" className="navCart" id="lws-cart">
            <FontAwesomeIcon icon={faCartPlus} />
            <span id="lws-totalCart">0</span>
            </Link>
        </div>
        </div>
    </nav>
    )
}

export default Navbar; 