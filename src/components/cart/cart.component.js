import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.component'
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import"./cart.styles.scss";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart-action";
const Cart=({cartItems,toggleCartHidden})=>{
    const navigate=useNavigate(); 
    return(
    <div className="cart">
        <div className="cart-items">
            {cartItems.length?cartItems.map((cartItem)=>{
                return (
                    <CartItem key={cartItem.id} {...cartItem}></CartItem>
                )
            }):<span className="empty-message">your card is empty</span>}
        </div>
        <CustomButton onClick={()=>{navigate('/checkout');toggleCartHidden()}}>GO TO CHECKOUT</CustomButton>
    </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
}
const mapStateToProps=createStructuredSelector({ 
    cartItems:selectCartItems
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
