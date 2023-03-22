import React, { useState } from "react";
import { Menu } from "../Menu";
import { MenuLeft } from "../MenuLeft";

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
        <>
            <Container>
                <LogoContainer>
                    <IconLogo src="../../src/assets/logo.png" />
                    <GroupNameLogo>
                        <TitleIgreja>Igreja</TitleIgreja>
                        <NameLogo>Atitude Cristã</NameLogo>
                    </GroupNameLogo>
                </LogoContainer>

                <ContainerButtonsHeader>
                    
                    <Menu />
                    <ButtonHamburg onClick={handleClickMenu}>
                        {
                            menuCliked === false ? <HamburgIncon name="GiHamburgerMenu" />
                            : <CloseMenu name="AiOutlineClose" />
                        }
                        
                    </ButtonHamburg>
                    <PesquisaHeader name="BsSearch" />
                </ContainerButtonsHeader>
            </Container>
        </>
    )
}