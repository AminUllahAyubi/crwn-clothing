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
                    id: 1,
                    linkUrl:'hats'
                },{
                    title: 'Jackets',
                    imageUrl: '../../../images/jackets.jpg',
                    id: 2,
                    linkUrl:''
                },{
                    title: 'Sneakers',
                    imageUrl: '../../../images/sneakers.jpg',
                    id: 3,
                    linkUrl:''
                },{
                    title: 'Womans',
                    imageUrl: '../../../images/women.jpg',
                    size:'large',
                    id: 4,
                    linkUrl:''
                },{
                    title: 'Mens',
                    imageUrl: '../../../images/men.jpg',
                    size:'large',
                    id: 5,
                    linkUrl:''
                }
            ]
        }
    }
    render() { 
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,...otherSectionProps})=>{
                    return <MenuItem key={id} {...otherSectionProps}/>
                })}
            </div>
        )
    }
}
export default Directory;