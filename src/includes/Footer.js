import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/logo.png';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Enab Beirut" className="logo-footer" />
            <ul className="menu">
                <li><Link to="/">Branches</Link></li>
                <li><Link to="/">Order Status</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact us</Link></li>
            </ul>
            <div className="social-media">
                <Link to="/"><i className="flaticon-facebook"></i></Link> 
                <Link to="/"><i className="flaticon-twitter"></i></Link> 
                <Link to="/"><i className="flaticon-linkedin"></i></Link> 
                <Link to="/"><i className="flaticon-youtube"></i></Link> 
                <Link to="/"><i className="flaticon-pinterest"></i></Link> 
            </div>
        </footer>
    );
}

export default Footer;