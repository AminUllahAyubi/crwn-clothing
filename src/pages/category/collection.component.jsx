import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";

import {useParams } from "react-router";

import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
const CollectionPage = ({collection}) => {
    const {title,items}=collection;
    return (
        <div className="collection">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=>
                        <CollectionItem key={item.id} item={item} />   
                    )
                }
            </div>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        collection:state.shop.collections.find(
            collection => collection.id === COLLECTION_ID_MAP[useParams().id]
        )
    }
}

export default connect(mapStateToProps)(CollectionPage);