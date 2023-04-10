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

            {/* Conteudo referente a igreja */}

            <div className="sobre-greja">
                <div className="header-sobre-igreja">
                    <div className="title-sobre">Atitude Cristã</div>
                </div>

                <div className="content-sobre-prega">
                    <div className="box-title-sobre">
                        <h1 className="title-prega">Pregando a palavra do senhor</h1>
                        <h4 className="subi-title-prega">PARA MANIFESTAR A SUA GLÓRIA NO MUNDO</h4>
                    </div>

                    <div className="box-galeria-img-prega"></div>
                </div>

                <div className="content-atitude">
                    <div className="box-galeria-img-atitude"></div>

                    <div className="box-title-atitude">
                        <h1>Não pregamos só a palavra do senhor</h1>
                        <h4>MAS TAMBÉM A ATITUDE</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}