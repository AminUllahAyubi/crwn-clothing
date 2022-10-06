import React from "react";
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl:'../../../images/hats.jpg',
                    id: 1
                },{
                    title: 'Jackets',
                    imageUrl: '../../../images/jackets.jpg',
                    id: 2
                },{
                    title: 'Sneakers',
                    imageUrl: '../../../images/sneakers.jpg',
                    id: 3
                },{
                    title: 'Womans',
                    imageUrl: '../../../images/women.jpg',
                    size:'large',
                    id: 4
                },{
                    title: 'Mens',
                    imageUrl: '../../../images/men.jpg',
                    size:'large',
                    id: 5
                }
            ]
        }
    }
    render() { 
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,imageUrl,title,size})=>{
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                })}
            </div>
        )
    }
}
export default Directory;