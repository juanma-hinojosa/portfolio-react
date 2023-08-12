import React from "react";
import BgAbout from "../img/bgs/bg-about.jpeg";
import "../css/about.css"
import IconComponent from "../components/icon";
import IconsLink from "../json/icons.json"

export default function About() {
    return (
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

                        <div className="links-wrapper">
                            {IconsLink.map(Icon => 
                                <IconComponent 
                                key={Icon.id}
                                    icon={Icon.icon}
                                    link={Icon.link}
                                />
                            )}
                        </div>


                    </article>
                </article>
                <figure className="right-about" >
                    <img src={BgAbout} alt="profile-img" data-aos="zoom-in" />
                </figure>
            </div>
        </main>
    )
}