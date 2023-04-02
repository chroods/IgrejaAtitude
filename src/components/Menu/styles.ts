import styled from "styled-components";

export const Container = styled.div`
    ul{
        display: flex;
        align-items: flex-end;
        gap: 15px;
        margin-right: 20px;
    }

    li{
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    li:hover .barraHover{
        background-color: #022155;
        animation: barraHover 1s ease-in-out both;
        transition: 600ms all ease-in-out;
    }

    li a{color:#222}
    li a:hover{color:#000}

    @keyframes barraHover{
        0%{
            width: 0;
        }

        100%{
            width: 100%;
        }
    }

    @keyframes barraHoverEnd{
        0%{
            width: 100%;
        }

        100%{
            width: 0;
        }
    }

    .barraHover{
        position: relative;
        bottom: 0;
        height: 2px;
        width: 100%;
        z-index: 1;
        animation: barraHoverEnd 1s ease-in-out both;
        transition: 600ms all ease-in-out;
    }

    @media (max-width: 1024px){
        display: none;
        transition: 600ms all ease-in-out;
    }
`;