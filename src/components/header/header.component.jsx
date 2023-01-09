import React from "react";
import './header.style.scss';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from '../cart/cart.component'
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser,hidden }) => {
    return (
        <div className="header">            
            <Link to='/' className="logo-container">
                <img src='../../../images/IMG_20221012_140641.png' alt='logo' ></img>
                {/* <img src='../../../images/4.2 favicon.ico.ico' alt='logo' ></img> */}
            
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link  className="optoin" to='/contact'>
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
            {hidden?<Cart/>:null}
        </div>
    );
}
const mapStateToProps=createStructuredSelector({
        currentUser:selectCurrentUser,
        hidden:selectCartHidden    
    }
)
export default connect(mapStateToProps)(Header);
