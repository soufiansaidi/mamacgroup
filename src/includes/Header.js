import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/logo.png';

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    let menuMobileStatus = mobileMenu ? 'open' : 'closed'

    return (
        <header className="py-3">
            <div className="container">
                <img src={logo} alt="Enab Beirut" className="logo-header d-none d-md-block" />
                <div className="toggleMenu d-block d-md-none" onClick={ () => setMobileMenu(!mobileMenu) }><span></span><span></span><span></span></div>
                <ul className="desktop-menu d-none d-md-flex align-items-center">
                    <li><Link to="/">Branches</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Orders</Link></li>
                    <li className="language"><Link to="">ع</Link></li>
                    <li className="shopping-cart"><Link to="/"><i className="flaticon-shopping-bag"></i><span className="cart-number">3</span></Link></li>
                </ul>
                <ul className="desktop-menu d-md-none">
                    <li className="language pr-3"><Link to="">ع</Link></li>
                    <li className="shopping-cart p-0"><Link to="/"><i className="flaticon-shopping-bag"></i></Link></li>
                </ul>
            </div>
            <ul id="mobile-menu" className={menuMobileStatus}>
                <li><Link to="/">Branches</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Orders</Link></li>
            </ul>
        </header>
    );
}

export default Header;