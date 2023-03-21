import React, { useState } from "react";
import { Menu } from "../Menu";

import { 
    Container,
    LogoContainer,
    IconLogo,
    GroupNameLogo,
    TitleIgreja,
    NameLogo,
    ContainerButtonsHeader,
    HamburgIncon,
    PesquisaHeader,
    ButtonHamburg,
    CloseMenu
 } from "./styles";

export function Header(){
    const [menuCliked, setMenuCliked] = useState(false);

    function handleClickMenu(){
        setMenuCliked(!menuCliked)
    }

    return(
        <Container>
            <LogoContainer>
                <IconLogo src="../../src/assets/logo.png" />
                <GroupNameLogo>
                    <TitleIgreja>Igreja</TitleIgreja>
                    <NameLogo>Atitude Cristã</NameLogo>
                </GroupNameLogo>
            </LogoContainer>

            <ContainerButtonsHeader>
                {/* <ButtonHamburg onClick={handleClickMenu}>
                    {
                        menuCliked === false 
                        ? <HamburgIncon name="GiHamburgerMenu" />
                        : <CloseMenu name="AiOutlineClose" />
                    }
                    
                </ButtonHamburg> */}
                <Menu></Menu>
                <PesquisaHeader name="BsSearch" />
            </ContainerButtonsHeader>
        </Container>
    )
}