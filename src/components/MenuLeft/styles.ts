import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 50%;
    max-width: 340px;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 2;
    border-radius: 0 20px 20px 0;
    transition: 600ms all ease-in-out;

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    li a{
        font-size: 20px;
        color: #dedede;
    }

    @media (min-width: 1024px){
        left: -340px;
        transition: 600ms all ease-in-out;
    }
`