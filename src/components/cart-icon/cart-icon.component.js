import React from "react";
import { ReactComponent as ShoppingIcon } from './s.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import './cart-icon.styles.scss';
const CartIcon = (props) => {
    return (
        <div className="cart-icon"  onClick={props.toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 