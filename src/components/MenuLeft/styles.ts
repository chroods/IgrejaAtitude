import styled, { css } from "styled-components";

interface Props{
    clicado: boolean;
}

export const Container = styled.div<Props>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${({clicado})=> !clicado ? '-340px' : '0'};
    top: 0;
    width: 50%;
    max-width: 340px;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 2;
    border-radius: 0 20px 20px 0;
    transition: 600ms all ease-in-out;
    background: rgb(0,143,255);
    background: linear-gradient(140deg, rgba(0,143,255,1) 0%, rgba(2,36,117,1) 67%, rgba(3,14,89,1) 100%);

    @keyframes animateMenu {
        0%{
            transform: translateX(-100px);
        }
        50%{
            transform: translateX(50px);
        }
        100%{
            transform: translateX(0);
        }
    }

    .menuactive{
        animation: animateMenu 1s both;
    }

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    li a{
        display: block;
        width: 100%;
        padding: 10px;
        transition: 1s all ease-in-out;
        text-align: center;
        font-size: 20px;
        color: #dedede;
    }

    li a:hover{
        position: relative;
        transition: 1s all ease-in-out;
        background-color: #ffff;
        color: #000;
    }

    @media (min-width: 1024px){
        transition: 600ms all ease-in-out;
        display: none;
    }
`

export const RedesMenu = styled.div`
    position: absolute;
    bottom: 15px;
    display: flex;
    gap: 20px;
    font-size: 2rem;
    color: #fff;

    .BsYoutube:hover{
        color: red;
        cursor: pointer;
    }

    .AiFillInstagram:hover{
        color: #E600C2;
        cursor: pointer;
    }
`;