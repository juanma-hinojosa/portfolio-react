import React from "react";

function IconComponent(props) {
    return (
        <a href={props.link}  rel="noreferrer" target="_blank" data-aos="fade-up">
            <i className={props.icon}></i>
        </a>
    )
}
export default IconComponent;