import React from "react";
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { 
    Container,
    RedesMenu
 } from "./styles";

interface Props{
    clicado: boolean;
}

export function MenuLeft({clicado}: Props){
    const clasMenu = clicado != false ? 'menuactive' : 'menudisabled';

    return(
        <Container clicado={clicado}>
            <ul>
                <li className={clasMenu}>
                    <a href="#">Sobre nòs</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Embaixadas</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Agenda</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Cursos</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Eventos</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Video</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Pastores</a>
                </li>
                <li className={clasMenu}>
                    <a href="#">Contato</a>
                </li>
            </ul>

            <RedesMenu>
                <BsYoutube className="BsYoutube"/>
                <AiFillInstagram className="AiFillInstagram" />
            </RedesMenu>
        </Container>
    )
}