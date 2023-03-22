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

    li a{color:#222}
    li a:hover{color:#000}

    @media (max-width: 1024px){
        display: none;
    }
`;