import { cartTypes } from "./cart-types"
const defaultState={
    hidden:false,    
}
const cartReducer=(state=defaultState,action)=>{
    switch(action.type){
        case cartTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state        
    }
}
export default cartReducer;