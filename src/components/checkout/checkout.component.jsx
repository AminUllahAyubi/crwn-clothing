import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { removeItem } from "../../redux/cart/cart-action";
import { decreaseItem } from "../../redux/cart/cart-action";
import { addItem } from "../../redux/cart/cart-action";

import StripeCheckoutButton from "../stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems,total,removeItem,increaseItem,decreaseItem }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div className="checkout-items">
                {cartItems.map((cartItem) => {
                    return (
                        <div className="checkout-item" key={cartItem.id}>
                            <div className="item-detail">
                                <img src={cartItem.imageUrl} alt='item' width={100} height={130}></img>
                            </div>
                            <div className="item-detail">
                                <span>{cartItem.name}</span>
                            </div>
                            <div className="item-detail">
                                <div className="arrow"
                                    onClick={()=>{increaseItem(cartItem)}}
                                >&#10094;</div>    
                                    <span>{cartItem.quantity}</span>
                                <div className="arrow"
                                    onClick={()=>decreaseItem(cartItem)}
                                >&#10095;</div>
                            </div>
                            <div className="item-detail">
                                <span>${cartItem.price}</span>
                            </div>
                            <div className="item-detail">
                                <span onClick={()=>removeItem(cartItem)}>&#10007;</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp:01/23 - CVV: 123
            </div>
            <StripeCheckoutButton
                price={total}
            />
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
const mapDispatchToProps=(dispatch)=>{
    return{
        removeItem:(item)=>dispatch(removeItem(item)),
        increaseItem:(item)=>dispatch(addItem(item)),
        decreaseItem:(item)=>dispatch(decreaseItem(item))        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
