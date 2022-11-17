import React from "react";
import { ReactComponent as ShoppingIcon } from './s.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import './cart-icon.styles.scss';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={props.toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
}
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 
