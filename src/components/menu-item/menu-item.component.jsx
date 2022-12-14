import React from 'react';
import './menu-item.style.scss';
import { useNavigate, useLocation } from 'react-router-dom';
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();
    let location = useLocation();
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${location.pathname}${linkUrl}`)}
        >
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >  
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}
export default MenuItem;