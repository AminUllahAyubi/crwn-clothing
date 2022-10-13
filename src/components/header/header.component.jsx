import React from "react";
import './header.style.scss';
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="header">
            <Link to='/' className="logo-container">
                <img src='../../../images/IMG_20221012_140641.png' alt='logo' width={100}></img>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="optoin" to='/contact'>
                    CONTACT
                </Link>
                <Link className="optoin" to='/contact'>
                    SIGN IN
                </Link>
            </div>
        </div> 
    )
}
export default Header;