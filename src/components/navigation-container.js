import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import ButtonsL from "../buttons/button";

 
class NavigationContainer extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink to ="/" className={"nav-link-active"}>
                            Home
                        </NavLink>
                    </div>
                   
                    <div className="nav-link-wrapper">
                        <NavLink to ="/about-me" className={"nav-link-active"}>
                            About
                        </NavLink>               
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to = "/portfolio" className={"nav-link-active"}>
                            Portfolio
                        </NavLink>
                    </div>
                    {/* <div className="nav-link-wrapper">
                        <div className="nav-link-active">
                            <ButtonsL/>
                        </div>
                    </div> */}
                </div>
                <div className="right-side">
                    <a href="https://www.linkedin.com/in/juan-hinojosa-b07b05209/" target="_blank" rel="noreferrer">Juan Hinojosa</a>
                </div>
            </div>
        )
    }
}

export default NavigationContainer;