import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div className="no-match" >
            <div className="no-match-content" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className="title-nomatch">Error, Pagina no Encontrada</h2>
                <h3>:(</h3>
                <div className="link-home-content">
                    <Link to="/" className="link-home">
                        <i className="fas fa-arrow-left"></i>
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    )
} 