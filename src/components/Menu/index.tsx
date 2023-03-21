import React from "react";
import {
    Container,
    BarraHover
} from "./styles";

export function Menu(){
    return (
        <Container>
            <ul>
                <li>
                    <a>Sobre nos</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Embaixadas</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Agenda</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Cursos</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Eventos</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Videos</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Pastores</a>
                    <BarraHover className="barra" />
                </li>
                <li>
                    <a>Contato</a>
                    <BarraHover className="barra" />
                </li>
            </ul>
        </Container>
    )
}