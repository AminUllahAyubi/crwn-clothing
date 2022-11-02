import React from "react";
import './header.style.scss';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
const Header = ({ currentUser }) => {
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
            </div>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        currentUser:state.user.currentUser
    }
}
export default connect(mapStateToProps)(Header);