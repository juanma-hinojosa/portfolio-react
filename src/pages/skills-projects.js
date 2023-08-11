import html from "../img/skills/skill-1.png"
import css from "../img/skills/skill-2.png"
import sass from "../img/skills/skill-3.png"
import js from "../img/skills/skill-4.png"
import bootstrap from "../img/skills/skill-5.png"
import mysql from "../img/skills/skill-6.png"
import node from "../img/skills/skill-8.png"
import mongo from "../img/skills/skill-13.png"
import python from "../img/skills/skill-10.png"
import reactIcon from "../img/skills/skill-11.png"
import angular from "../img/skills/skill-12.png"
import handle from "../img/skills/skill-14.png"
import figma from "../img/skills/skill-16.png"
import React from "react";
import Project from "../components/project";
import Linkbutton from "../components/buttons-links";
import { useEffect, useState } from "react";
import projects from "../json/projects.json";

export default function Porfolio() {
    const [repos, setRepos] = useState();
    useEffect(() => {
        fetch("https://api.github.com/users/juanma-hinojosa")
            .then((res) => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    setRepos(result.public_repos)
                },
                (error) => {
                    // console.log(error);
                }
            );
    }, []);
    return (
        <div>
            <div className="services">
                <div className="left-services">
                    <div className="title-services">
                        <h1>Educacion</h1>
                    </div>
                    <div className="subtitle-services">
                        <p>Toda mi Educacion y Habilidades con las que puedes contar en tus proyectos</p>
                    </div>
                </div>
                <div className="right-services" >
                    <div className="educacion-container">
                        <h2>UTN e-Learning</h2>
                        <p>Programador Web Avanzado</p>
                        <span>(Sep 2022 - Dic 2022)</span>
                        <div className="skill-wrapper">
                            <div>
                                <img src={html} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={css} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={js} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={bootstrap} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={mysql} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={handle} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={mongo} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={node} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={angular} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={reactIcon} alt="skill-img" data-aos="zoom-in" />
                            </div><div>
                                <img src={figma} alt="skill-img" data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>

                    <div className="educacion-container">
                        <h2>UTN e-Learning</h2>
                        <p>Programador Web Inicial</p>
                        <span>(Abri 2022 - Ago 2022)</span>
                        <div className="skill-wrapper">
                            <div>
                                <img src={html} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={css} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={js} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={bootstrap} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={mysql} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={handle} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={node} alt="skill-img" data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>

                    <div className="educacion-container">
                        <h2>Bottega University</h2>
                        <p>Full Stack Development</p>
                        <span>(Jul 2021 - Dic 2021)</span>
                        <div className="skill-wrapper">
                            <div>
                                <img src={html} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={css} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={js} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={sass} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={mysql} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={python} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={reactIcon} alt="skill-img" data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>

                    <div className="educacion-container">
                        <h2>Bottega Tech</h2>
                        <p>Coding Foundation Course</p>
                        <span>(Ene 2021 - Jun 2021)</span>
                        <div className="skill-wrapper">
                            <div>
                                <img src={html} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={css} alt="skill-img" data-aos="zoom-in" />
                            </div>
                            <div>
                                <img src={js} alt="skill-img" data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="left-work">
                    <div className="left-content" data-aos="fade-right">
                        <div className="title-work">
                            <h1>PORTAFOLIO</h1>
                        </div>
                        <div className="subtitle-work">
                            <p>Te inivito que pases a ver algunos de los proyectos personales en los que trabaje y mi Repositorio con {repos} Proyectos en la actualidad</p>
                        </div>
                        <Linkbutton
                            linkbtn="https://github.com/juanma-hinojosa"
                            linkWork="Ver GitHub"
                            fonticon="fab fa-github"
                        />
                    </div>
                </div>
                <div className="right-work">
                    {projects.map(project =>
                        <Project
                            key={project.imagen}
                            imagen={project.imagen}
                            titulo={project.titulo}
                            job={project.job}
                            url={project.url}
                            urlGit={project.urlGit}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}