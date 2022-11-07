import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.component'
import { connect } from "react-redux";
import'./cart.styles.scss';
const Cart=({cartItems})=>{ 
    return(
    <div className="cart">
        <div className="cart-items">
            {cartItems.map((cartItem)=>{
                return (
                    <CartItem key={cartItem.id} {...cartItem}></CartItem>
                )
            })}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        cartItems:state.cart.cartItems
    }
}
export default connect(mapStateToProps)(Cart);