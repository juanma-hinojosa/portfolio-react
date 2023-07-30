import React from "react";
import Project from "../components/project";
import Skill from "../components/skill";
import Linkbutton from "../components/buttons-links";
import { useEffect, useState } from "react";
import projects from "../json/projects.json";
import skills from "../json/skills.json"

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
                        <h1>HABILIDADES</h1>
                    </div>
                    <div className="subtitle-services">
                        <p>Todas las habilidades con las que puedes contar en tus proyectos</p>
                    </div>
                </div>
                <div className="right-services" >
                    {skills.map(skill =>
                        <Skill
                            key={skill.imagen}
                            language={skill.language}
                            imagen={skill.imagen}
                        />
                    )}
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