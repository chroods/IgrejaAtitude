import styled, { css } from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai' 
import {BsSearch} from 'react-icons/bs'

const { innerWidth: width, innerHeight: height } = window;
console.log(innerWidth, width);

export const Container = styled.div`
position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 10px;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const IconLogo = styled.img`
    width: 90px;
    height: 60px;
`;

export const GroupNameLogo = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleIgreja = styled.text`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
`

export const NameLogo = styled.text`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
`;

export const ContainerButtonsHeader = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 10px;
`

export const ButtonHamburg = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 600px){
        display: none;
    }
`

export const HamburgIncon = styled(GiHamburgerMenu)`
    font-size: 18px;
    transition: 300ms all ease-in-out;
`

export const PesquisaHeader = styled(BsSearch)`
    font-size: 18px;
    transition: 300ms all ease-in-out;
`

export const CloseMenu = styled(AiOutlineClose)`
    font-size: 18px;
    transition: 300ms all ease-in-out;
`