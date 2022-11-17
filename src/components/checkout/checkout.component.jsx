import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import './checkout.styles.scss';
const CheckoutPage = ({ cartItems,total }) => {
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
                        <div className="checkout-item">
                            <div className="item-detail">
                                <img src={cartItem.imageUrl} alt='item' width={100} height={130}></img>
                            </div>
                            <div className="item-detail">
                                <span>{cartItem.name}</span>
                            </div>
                            <div className="item-detail">
                                <span>{cartItem.quantity}</span>
                            </div>
                            <div className="item-detail">
                                <span>${cartItem.price}</span>
                            </div>
                            <div className="item-detail">
                                <span>&#10008;</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
