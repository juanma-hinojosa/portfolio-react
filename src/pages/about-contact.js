import React from "react";
import BgAbout from "../img/bgs/bg-about.jpeg";
import Linkbutton from "../components/buttons-links";
import "../css/about.css"


export default function About () {
    return( 
        <main>
            <div className="about">
                <article className="left-about">
                    <article className="left-content" data-aos="fade-right">
                        <section className="title-about">
                            <h1>SOBRE MI</h1>
                        </section>
                        <section className="subtitle-about">
                            <p>Soy un desarrollador Free Lance Full-Stack, me especializo en el diseño Front End</p>
                                
                            <p>Muchas de mis habilidades las adquiri en distintos Bootcamps de todo el mundo desde Argentina, Brasil y Estados Unidos</p>
                        </section>
                        <Linkbutton 
                            linkbtn= "https://www.linkedin.com/in/juan-hinojosa-b07b05209/"
                            linkWork= "Ver Linkdln"
                            fonticon= "fab fa-linkedin"
                        />
                    </article>
                </article>
                <figure className="right-about" >
                    <img src={BgAbout} alt="profile-img" data-aos="zoom-in"/>
                </figure>
            </div>
        </main>
    )
}