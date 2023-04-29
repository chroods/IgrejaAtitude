import React from "react";
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { 
    Container,
    RedesMenu
 } from "./styles";
import { Link } from "react-router-dom";

interface Props{
    clicado: boolean;
}

export function MenuLeft({clicado}: Props){
    const clasMenu = clicado != false ? 'menuactive' : 'menudisabled';

    return(
        <Container clicado={clicado}>
            <ul>
                <li className={clasMenu}>
                    <Link to="#">Sobre nòs</Link>
                </li>
                <li className={clasMenu}>
                    <Link to="/embaixadas">Embaixadas</Link>
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