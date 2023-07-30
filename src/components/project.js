import React from "react";

function Project(props) {
    return(
        <div className="work" data-aos="zoom-in">
            <img src={require(`../img/jobs/job-${props.imagen}.jpg`)} alt="" />
            <div className="capa">
                <h3>{props.titulo}</h3>
                <h4>{props.job}</h4>
                <div>
                    <div className="link-work">
                        <a href={props.url} target="_blank" rel="noreferrer">SEE SITE</a>
                    </div>
                    <div className="link-work asd">
                        <a href={props.urlGit} target="_blank" rel="noreferrer">SEE CODE</a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Project;