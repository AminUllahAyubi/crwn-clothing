import React from "react";
import './homePage.Style.scss';
const HomePage=()=>{
    return(
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 class='title'>HATS</h1>
                        <span class='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 class='title'>JACKETS</h1>
                        <span class='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 class='title'>SNEAKERS</h1>
                        <span class='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 class='title'>WOMENS</h1>
                        <span class='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 class='title'>MENS</h1>
                        <span class='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {HomePage};