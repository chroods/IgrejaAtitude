import React from "react";
import {Container} from "./styles";

export function Menu(){
    return(
        <Container>
            <ul>
                <li>
                    <a href="#">Sobre nòs</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Embaixadas</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Agenda</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Cursos</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Eventos</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Video</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Pastores</a>
                    <div className="barraHover"></div>
                </li>
                <li>
                    <a href="#">Contato</a>
                    <div className="barraHover"></div>
                </li>
            </ul>
        </Container>
    )
}