import { cartTypes } from "./cart-types"
import { addItemToCart } from "./cart.utils"
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
                // quantity:state.quantity+1
            }
        default:
            return state
    }
}
export default cartReducer;