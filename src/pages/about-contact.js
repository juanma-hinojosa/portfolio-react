import React from "react";
import BgAbout from "../img/bgs/bg-about.jpeg";
import Linkbutton from "../components/buttons-links";

export default function About () {
    return(
        <div>
            <div className="about">
                <div className="left-about">
                    <div className="left-content" data-aos="fade-right">
                        <div className="title-about">
                            <h1>SOBRE MI</h1>
                        </div>
                        <div className="subtitle-about">
                            <p>Soy un desarrollador Free Lance Full-Stack, me especializo en el diseño Front End</p>
                                
                            <p>Muchas de mis habilidades las adquiri en distintos Bootcamps de todo el mundo desde Argentina, Brasil y Estados Unidos</p>
                        </div>
                        <Linkbutton 
                            linkbtn= "https://www.linkedin.com/in/juan-hinojosa-b07b05209/"
                            linkWork= "Ver Linkdln"
                            fonticon= "fab fa-linkedin"
                        />
                    </div>
                </div>
                <div className="right-about" >
                    <img src={BgAbout} alt="profile-img" data-aos="zoom-in"/>
                </div>
            </div>
        </div>
    )
}