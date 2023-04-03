import React from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Slide } from "../../components/Slide";
import { Footer } from "../../components/Footer";

export function Home(){
    return(
        <Container>
            <Header/>
            <Slide />
            <Footer />
        </Container>
    )
}