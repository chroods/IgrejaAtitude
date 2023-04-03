import React from "react";
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {
    Container,
    GoupHeader,
    LogoContainer,
    IconLogo,
    Content,
    GroupNameLogo,
    TitleIgreja,
    NameLogo,
    RedesMenu,
    TitleEndereco
} from "./styles";
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <Container>
            <GoupHeader>
                <Link to="/">
                    <LogoContainer>
                        <IconLogo src="../../src/assets/logo.png" />
                        <GroupNameLogo>
                            <TitleIgreja>Igreja</TitleIgreja>
                            <NameLogo>Atitude Cristã</NameLogo>
                        </GroupNameLogo>
                    </LogoContainer>
                </Link>
                <RedesMenu>
                    <TitleEndereco>Midias Sociais</TitleEndereco>
                    <Content>
                        <BsYoutube className="BsYoutube"/>
                        <AiFillInstagram className="AiFillInstagram" />
                    </Content>
                </RedesMenu>
            </GoupHeader>

            <GoupHeader>
                <ul>
                    <li>
                        <Link to="/">Sobre nòs</Link>
                    </li>
                    <li>
                        <Link to="/embaixadas">Embaixadas</Link>
                    </li>
                    <li>
                        <Link to="/">Agenda</Link>
                    </li>
                    <li>
                        <Link to="/">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/">Eventos</Link>
                    </li>
                    <li>
                        <Link to="/">Video</Link>
                    </li>
                    <li>
                        <Link to="/">Pastores</Link>
                    </li>
                    <li>
                        <Link to="/">Contato</Link>
                    </li>
                </ul>
            </GoupHeader>

            <GoupHeader>
                <TitleEndereco>Endereço</TitleEndereco>
                <p className="text-endereco">
                    Avenida Independência QD. 01 LT. 25
                    JARDIM MONTE CRISTO
                    Aparecida de Goiânia - GO
                    74968-350
                    Brasil
                </p>
            </GoupHeader>
        </Container>
    )
}