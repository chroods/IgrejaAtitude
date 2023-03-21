import styled from "styled-components";

export const Container = styled.div`
    margin-right: 20px;

    ul{
        display: flex;
        gap: 10px;
    }

    li{
        font-size: 20px;
        cursor: pointer;
    }

    @keyframes initProgressBarra {
        0%{ width: 0;}

        100%{width: 100%;}
    }

    @keyframes endProgressBarra {
        0%{ width: 100%;}

        100%{width: 0;}
    }

    li:hover .barra{
        animation: progressBarra 1s ease-in-out both;
        transition: 600ms all ease-in-out;
    }

    @media (max-width: 960px){display: none}
`;

export const BarraHover = styled.div`
    position: relative;
    width: 100%;
    height: 2px;
    background-color: blue;
    transition: 600ms all ease-in-out;
    animation: endProgressBarra 1s ease-in-out both;
`;