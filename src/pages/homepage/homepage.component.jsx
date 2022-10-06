import React from "react";
import './homePage.Style.scss';
import Directory from "../../components/directory/directory.component";
const HomePage=()=>{
    return(
        <div className="homepage">
            <Directory/>
        </div>
    );
}
export {HomePage};