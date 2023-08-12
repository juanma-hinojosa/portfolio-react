import React from "react";
import Linkbutton from "../components/buttons-links";
import "../css/home.css"

export default function Home() {
    return (
        <main className="hero-section">
            <article className="hero-wrapper" data-aos="zoom-in">
                <section className="title-hero">
                    <h2>Junior <br />Full Stack Developer</h2>
                </section>
                <section className="subtitle-hero">
                    <p>
                        Soy un joven Desarrollador FullStack <br />
                        Creemos juntos grandes Aplicaciones
                    </p>
                </section>

                <section className="links">
                    <Linkbutton
                        linkbtn="https://github.com/juanma-hinojosa"
                        linkWork="Ver GitHub"
                        fonticon="fab fa-github"
                    />
                    <div className="helper-10"></div>
                    <Linkbutton
                        linkbtn="https://www.linkedin.com/in/juan-hinojosa-b07b05209/"
                        linkWork="Ver Linkdln"
                        fonticon="fab fa-linkedin"
                    />
                </section>
            </article>
        </main>
    )
}