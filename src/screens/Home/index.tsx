import React from "react";

import { Header } from "../../components/Header";
import { Slide } from "../../components/Slide";
import { Footer } from "../../components/Footer";

import { 
    Container,
    SobreGreja,
    HeaderSobreIgreja,
    ContentSobrePrega,
    BoxTitleSobre,
    ContainerImgsReference,
    BoxGaleriaImgPrega,
    TitleImgPrega,
    ContentAtitude,
    BoxGaleriaImgAtitude,
    BoxTitleAtitude,
} from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <Slide />

            {/* Conteudo referente a igreja */}

            <SobreGreja>
                <HeaderSobreIgreja>
                    <div className="title-sobre">Atitude Cristã</div>
                </HeaderSobreIgreja>

                <ContentSobrePrega>
                    <BoxTitleSobre>
                        <h1 className="title-prega">Pregando a <br /> palavra do senhor</h1>
                        <h4 className="subi-title-prega">PARA MANIFESTAR <br />A SUA GLÓRIA NO MUNDO</h4>
                    </BoxTitleSobre>

                    <ContainerImgsReference>
                        <BoxGaleriaImgPrega>

                            <img src="../../src/assets/07.jpg" className="imgPregando" />
                            <img src="../../src/assets/09.jpg" className="imgPregando" />
                            <img src="../../src/assets/08.jpg" className="imgPregando" />
                            <img src="../../src/assets/12.jpg" className="imgPregando" />
                            <img src="../../src/assets/13.jpg" className="imgPregando" />
                        </BoxGaleriaImgPrega>

                        <TitleImgPrega>Pregando a palavra de Deus e conectando pessoas.</TitleImgPrega>
                    </ContainerImgsReference>
                </ContentSobrePrega>

                <ContentAtitude>
                    <BoxGaleriaImgAtitude></BoxGaleriaImgAtitude>

                    <BoxTitleAtitude>
                        <h1>Não pregamos só a palavra do senhor</h1>
                        <h4>MAS TAMBÉM A ATITUDE</h4>
                    </BoxTitleAtitude>
                </ContentAtitude>
            </SobreGreja>
            <Footer />
        </Container>
    )
}