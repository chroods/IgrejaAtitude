import React from "react";
import {Container} from "./styles";
import { Link } from 'react-router-dom';

export function Menu(){
    return(
        <Container>
            <ul>
                <li>
                    <Link className="linkMenu" to="sobre">Sobre nòs</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="/embaixadas">Embaixadas</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Agenda</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Cursos</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Eventos</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Video</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Pastores</Link>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <Link to="sobre">Contato</Link>
                    <div className="barraHover"></div>
                </li>
            </ul>
        </Container>
    )
}