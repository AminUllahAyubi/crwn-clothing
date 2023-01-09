
                        // this is the course approach but not work
// const mapStateToProps=(state,urlParams)=>{
//     return {
//         collection:selectCollection(state,urlParams.id)(state)
//     }    
// } 
                        //  this is my solution without reselect library useing


                        // shop reducer selector for collection but not work this is tutorial approach
                        
// export const selectCollection = (collectionUrlParam) => {
//     createSelector(
//         [selectCollections],
//         collections => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//     )
// }