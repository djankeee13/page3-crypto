import './Navbar.css'
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
            setNav(!nav)
    }
    return ( 
        <div className="header">
            <div className="container">
                <h1>De <span className='primary'>Fi</span></h1>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Featured</a></li>
                    <li><a href="/">Earn</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="btn-group">
                    <button className="btn"> Connect Wallet</button>
                </div>
                <div className="menu-icon" onClick={handleNav}>
                   {!nav ? <FaBars size={20} style={{color: '#333' }}/> : <FaTimes size={20} style={{color: '#333' }}/>} 
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
