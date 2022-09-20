/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Link } from "react-router-dom";
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
                    <img src={BgAbout} data-aos="zoom-in"/>
                </div>
            </div>
            {/* <div className="contact">
                <div className="right-contact">

                </div>
                <div className="left-contact">
                    <div className="form">
                        <div className="form-group">
                            <input type="text" id="fullName" placeholder="Your name" />
                            <label for="fullName">Your name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" placeholder="Your Email" />
                            <label for="email">Your Email</label>
                        </div>
                        
                        <div className="form-group">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                            <label for="message">Message</label>
                        </div>

                        <div className="spacer10"></div>

                        <div className="center-btn-wrapper">
                            <button type="submit" class="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}