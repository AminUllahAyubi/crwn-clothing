import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import './collection-item.style.scss';
const CollectionItem=({item,addItem,cartItems})=>{
    const {name,price,imageUrl}=item;
    return(
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            >
            </div>
            <CustomButton onClick={()=>{addItem(item);}}>ADD CART</CustomButton>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}
const mapStateToProps=({user,cart})=>{
    return{
        cartItems:cart.cartItems
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItem:(item)=>dispatch(addItem(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);