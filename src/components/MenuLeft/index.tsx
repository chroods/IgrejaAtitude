import React from "react";
import { Container } from "./styles";

interface Props{
    clicado: boolean
}

export function MenuLeft({clicado}: Props){
    return(
        <Container clicado={clicado}>
            <ul>
                <li>
                    <a href="#">Sobre nòs</a>
                </li>
                <li>
                    <a href="#">Embaixadas</a>
                </li>
                <li>
                    <a href="#">Agenda</a>
                </li>
                <li>
                    <a href="#">Cursos</a>
                </li>
                <li>
                    <a href="#">Eventos</a>
                </li>
                <li>
                    <a href="#">Video</a>
                </li>
                <li>
                    <a href="#">Pastores</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </Container>
    )
}