import React from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { MenuLeft } from "../../components/MenuLeft";

export function Home(){
    return(
        <Container>
            <Header/>
            <MenuLeft/>
        </Container>
    )
}