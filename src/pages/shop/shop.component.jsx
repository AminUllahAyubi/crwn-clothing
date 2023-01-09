import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const Shop = () => {
    return (
        <div className="shop-page">
           <CollectionsOverview/>
           {/* <Routes>
             <Route path="shop/s" element={<h1>wle</h1>}></Route>
           </Routes> */}
           {/* <Routes>
                <Route path=":id" element={<h1>welcome</h1>}></Route>
           </Routes>        */}   
        </div>
    );
}
export default Shop;