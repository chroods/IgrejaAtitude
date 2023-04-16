import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
`;

export const SobreGreja = styled.div`
    width: 100%;
    padding: 20px;
    margin: 20px 0;
`;

export const HeaderSobreIgreja = styled.div`
    text-align: center;
    margin: 0 0 80px 0;
    padding: 20px 0 40px 0;

    .title-sobre{
        font-size: 2rem;
        font-weight: 700;
        color: #0D265F;
    }
`;

export const ContentSobrePrega = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const BoxTitleSobre = styled.div`
    width: 100%;
    padding: 0 40px;
    .title-prega{
        font-size: 5rem;
        line-height: 65px;
        font-weight: 700;
    }

    .subi-title-prega{
        margin: 40px 0;
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: 0.8rem;
        color: #3079BC;
    }
`;

export const ContainerImgsReference = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    gap: 40px;
    padding: 0 20px;
`;

export const BoxGaleriaImgPrega = styled.div`
    position: relative;
    width: calc(100% - 35%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .imgPregando{
        position: relative;
        min-width: 300px;
        max-width: 400px;
        width: 50%;
        transition: 600ms all ease-in-out;
    }

    .imgPregando:nth-child(1){
        height: 310px;
    }

    .imgPregando:nth-child(2){
        top: 42px;
    }

    .imgPregando:nth-child(3){
        position: absolute;
        z-index: 1;
        transition: 600ms all ease-in-out;
        width: 500px;
    }

    .imgPregando:nth-child(4){
        top: -42px;
    }

    .imgPregando:nth-child(5){
        height: 310px;
    }

    .imgPregando:hover{
        z-index: 2;
        transition: 600ms all ease-in-out;
        border-radius: 0;
        transform: scale(1.1);
    }

    @media(max-width: 1026px) {
        width: 100%;
    }

    @media (max-width: 701px) {
        .imgPregando{
            width: 100%;
        }

        .imgPregando:nth-child(1){
            height: auto;
        }

        .imgPregando:nth-child(2){
            top: 0;
        }

        .imgPregando:nth-child(3){
           width: 100%;
           position: relative;
        }

        .imgPregando:nth-child(4){
            top: 0;
        }

        .imgPregando:nth-child(5){
            height: auto;
        }
    }
`;

export const TitleImgPrega = styled.h1`
    position: relative;
    width: 30%;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 80px;

    @media (max-width: 1026px) {
        width: 100%;
    }
`;

export const ContentAtitude = styled.div``;

export const BoxGaleriaImgAtitude = styled.div``;

export const BoxTitleAtitude = styled.div``;
