import { cartTypes } from "./cart-types"
export const toggleCartHidden=()=>{
    return{
        type:cartTypes.TOGGLE_CART_HIDDEN
    }
}
export const addItem=(item)=>{
    return{
        type:cartTypes.ADD_ITEM,
        payload:item
    }
}
export const removeItem=(item)=>{
    return{
        type:cartTypes.REMOVE_ITEM,
        removeItem:item
    }
}
export const decreaseItem=(item)=>{
    return{
        type:cartTypes.DECREASE_ITEM,
        payload:item
    }
}