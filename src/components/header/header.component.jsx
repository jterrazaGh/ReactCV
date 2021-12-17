import React from "react";
import ProfilePic from "../../assets/ProfilePicture.png";

import "./header.styles.scss";

import optionsMenu from "./header.data";
import personalData from "../personalinformation/personalinformation.data";

import NavigationLink from "../../components/navigationslink/navigationlink.component"

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: optionsMenu,
            personData: personalData,
        };
    }

    render() {
        const { collections } = this.state;
        const { personData } = this.state;
        
        
        return (
            <div className="contentDiv">
                <div className="contentHeader">
                    <div className="contentPic">
                      <img className="imgProfile" src={ProfilePic} />  
                     </div>   
                    <div className="contentInfo">
                        <div className="contentInfoName">
                            <span>{personData[0].name}</span>
                        </div>
                        <div className="contentInfoTitulo">
                            <span>{personData[0].grado}</span>
                        </div>
                    </div>
                </div>
                <div className="contentOptions">
                    {collections.map(({id, ...otherNavigationLink})=>(
                        <NavigationLink key={id} {...otherNavigationLink}/>
                    ))}
                </div>
    
            </div>
        );
    }
}

export default Header;