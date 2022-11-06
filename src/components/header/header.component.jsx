import React from "react";
import './header.style.scss';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from '../cart/cart.component'
const Header = ({ currentUser,cart }) => {
    console.log(cart.hidden)
    return (
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
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}> 
                        SIGN OUT
                    </div> :
                    <Link className="optoin" to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CartIcon/>
            </div>
            {cart.hidden?<Cart/>:''}
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        currentUser:state.user.currentUser,
        cart:state.cart    
    }
}
export default connect(mapStateToProps)(Header);
