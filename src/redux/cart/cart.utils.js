export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return (
                cartItem.id === cartItemToAdd.id 
                ?{ ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
        })
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
// this method is for decreasing the items
export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemToRemove.id
    )
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    return cartItems.map(
        (cartItem)=>{
            return cartItem.id===cartItemToRemove.id?
            {...cartItem,quantity:cartItem.quantity-1}
            :cartItem
        }
    )
}
