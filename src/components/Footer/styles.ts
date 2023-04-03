import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding: 20px;
`;

export const GoupHeader = styled.div`
    width:100%;
    min-width: 250px;
    max-width: 295px;
    display: flex;
    flex-direction: column;
    align-items:start;
    gap: 20px;
    padding: 40px 0;
    

    .text-endereco{
        text-align: center;
        font-weight: 500;
    }

    &:nth-child(2){
        justify-content: center;
        align-items:center;
        border-right: 1px solid rgba(2,36,117,1);
        border-left: 1px solid rgba(2,36,117,1);
    }

    ul li{
        font-size: 1rem;
        margin-bottom: 10px ;
        font-weight: 500;
    }

    ul li a{color: #444;}
    ul li a:hover{color: #000;}

    @media (max-width: 736px){
        &:nth-child(2){
            border-top: 1px solid rgba(2,36,117,1);
            border-bottom: 1px solid rgba(2,36,117,1);
            border-left: none;
        }
    }

    @media (max-width: 1026px){
        &{
            max-width: 320px;
        }

        &:nth-child(2){border-right: none;}
    }

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const IconLogo = styled.img`
    width: 120px;
    height: 90px;
`;

export const GroupNameLogo = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
`

export const TitleIgreja = styled.text`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1rem;
`

export const NameLogo = styled.text`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
`;

export const RedesMenu = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 50px 0;
`;

export const Content = styled.div`
    display: flex;
    gap: 20px;
    font-size: 3rem;
`;

export const TitleEndereco = styled.text`
    font-weight: 600;
`;