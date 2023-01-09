const INITIAL_STATE={
    sections: [
        {
            title: 'hats',
            imageUrl:'../../../images/hats.jpg',
            id: 1,
            linkUrl:'shop/hats'
        },{
            title: 'Jackets',
            imageUrl: '../../../images/jackets.jpg',
            id: 2,
            linkUrl:'shop/jackets'
        },{
            title: 'Sneakers',
            imageUrl: '../../../images/sneakers.jpg',
            id: 3,
            linkUrl:'shop/sneakers'
        },{
            title: 'Womans',
            imageUrl: '../../../images/women.jpg',
            size:'large',
            id: 4,
            linkUrl:'shop/womans'
        },{
            title: 'Mens',
            imageUrl: '../../../images/men.jpg',
            size:'large',
            id: 5,
            linkUrl:'shop/mens'
        }
    ]    
}
const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer;