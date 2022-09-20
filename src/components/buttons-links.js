/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Linkbutton(props) {
    return(
        <div className="button-link">
            <a className="link" href={props.linkbtn} target="_blank" rel="noreferrer">{props.linkWork}
            <i className={props.fonticon}></i>
            </a>
        </div>
    )
}

export default Linkbutton;