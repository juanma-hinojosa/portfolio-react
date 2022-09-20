import React from "react";
// import { Link } from "react-router-dom";
import Project from "../components/project";
import Skill from "../components/skill";
import Linkbutton from "../components/buttons-links";
import { useEffect, useState } from "react";

export default function Porfolio() {
    const [repos, setRepos] = useState();
    useEffect(() => {
        fetch("https://api.github.com/users/juanma-hinojosa")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setRepos(result.public_repos)
                },
                (error) => {
                    // console.log(error);
                }
            );
    }, []);

    const softSkills = [
        { language: "HTML5", imagen: 1 },
        { language: "CSS3", imagen: 2 },
        { language: "SASS-SCSS", imagen: 3 },
        { language: "Javascript", imagen: 4 },
        { language: "BOOTSTRAP", imagen: 5 },
        { language: "MySQL", imagen: 6 },
        { language: "Postgres SQL", imagen: 7 },
        { language: "Node JS", imagen: 8 },
        { language: "Mongo DB", imagen: 13 },
        { language: "Python", imagen: 10 },
        { language: "React Js", imagen: 11 },
        { language: "Angular Js", imagen: 12 },
    ]
    const projects = [
        { imagen: 6, titulo: "Spotify", job: "Interface con HTML & CSS", url: "https://juanma-hinojosa.github.io/spotify-utn/", urlGit: "https://github.com/juanma-hinojosa/spotify-utn" },
        { imagen: 1, titulo: "Codepen", job: "Interface con HTML & CSS", url: "https://juanma-hinojosa.github.io/clone-code-pen/", urlGit: "https://github.com/juanma-hinojosa/clone-code-pen" },
        { imagen: 9, titulo: "Spiderman Multiverse", job: "Node.Js - HBS - Jquery", url: "https://primer-app1.herokuapp.com/", urlGit: "https://github.com/juanma-hinojosa/Spiderman-Multiverse" },
        { imagen: 10, titulo: "Stranger Things", job: "Interface con HTML-CSS-JS-Firebase", url: "https://juanma-hinojosa.github.io/straner-things/", urlGit: "https://github.com/juanma-hinojosa/straner-things" },
        { imagen: 4, titulo: "Netflix", job: "Interface con HTML & CSS & Jquery", url: "https://juanma-hinojosa.github.io/clone-netflix/", urlGit: "https://github.com/juanma-hinojosa/clone-netflix" },
        { imagen: 2, titulo: "Disney+", job: "Interface con HTML & CSS", url: "https://juanma-hinojosa.github.io/clone-disneyplus/", urlGit: "https://github.com/juanma-hinojosa/clone-disneyplus" },
    ]
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
                    {softSkills.map(skill =>
                        <Skill language={skill.language} imagen={skill.imagen}></Skill>
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

                        {/* <Link to="/portofio/projects" className="button-link">
                            <i class="fas fa-arrow-left"></i>
                            Ver Repositorios
                        </Link> */}
                    </div>
                </div>
                <div className="right-work">
                    {projects.map(project =>
                        <Project imagen={project.imagen} titulo={project.titulo} job={project.job} url={project.url} urlGit={project.urlGit}></Project>
                    )}
                </div>
            </div>
        </div>
    )
}