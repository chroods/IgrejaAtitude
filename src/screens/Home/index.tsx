import React from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Slide } from "../../components/Slide";

export function Home(){
    return(
        <Container>
            <Header/>
            <Slide />
        </Container>
    )
}