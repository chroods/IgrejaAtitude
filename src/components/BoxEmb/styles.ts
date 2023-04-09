import styled from "styled-components";

interface Props{
    whats?: boolean; 
}

export const Container = styled.div`
    width: 100%;
    max-width: 340px;
    background-color: #f5f5f5;

    &:hover .titlebox-emb{
        background: rgb(0,143,255);
        background: linear-gradient(140deg, rgba(0,143,255,1) 0%, rgba(2,36,117,1) 67%, rgba(3,14,89,1) 100%);
        color: #fff;
        transition: 600ms all ease-in-out;
    }
`

export const Title = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 600ms all ease-in-out;
    font-weight: 500;
`;

export const Legenda = styled.div`
    margin: 10px 0 10px 20px;
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0;
    margin: 15px 0 0 0;
    padding: 20px;
`;

export const BoxsContent = styled.div<Props>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    .icon-boxs{
        position: relative;
        font-size: 1.2rem;
    }

    &:nth-child(2) .icon-boxs{
        font-size: ${({whats})=> whats === false ? '3.5rem' : ''};
    }

    &:nth-child(3) .icon-boxs{font-size: 3.5rem;}

`;

export const TextContent = styled.p`
    position: relative;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    a{
        position: relative;
        color: #000;
    }
`;