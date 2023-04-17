import React from "react";
import {Container} from "./styles";
import { Link } from 'react-router-dom';

export function Menu(){
    return(
        <Container>
            <ul>
                <li>
                    <Link className="linkMenu" to="/sobre">Sobre nòs</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/embaixadas">Embaixadas</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/agenda">Agenda</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/cursos">Cursos</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/eventos">Eventos</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/videos">Video</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/pastores">Pastores</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                    <div className="barraHover"></div>
                </li>
            </ul>
        </Container>
    )
}