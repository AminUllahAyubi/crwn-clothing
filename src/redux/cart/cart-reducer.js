import { cartTypes } from "./cart-types";
import { addItemToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";
const defaultState = {
    hidden: false,
    cartItems: [],
    quantity: 0
}
const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload),
            }
        case cartTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>{
                    return item.id!==action.removeItem.id
                })
            }        
        case cartTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;
