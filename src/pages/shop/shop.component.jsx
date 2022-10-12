import React from "react";
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }
    render(){
        let {collection}=this.state;
        return(
            <div className="shop-page">
                {collection.map(({id,...otherCollectionProps})=>{
                    return(
                        <CollectionPreview
                            key={id} 
                            {...otherCollectionProps}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Shop;