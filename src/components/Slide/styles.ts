import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 90px);

    img{
        position: absolute;
        width: 100%;
        height: calc(100vh - 90px);
        object-fit: cover;
    }
`
export const ButtonSlide = styled.button`
    z-index:1;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`;

export const LegendaImgSlide = styled.div`
    z-index: 1;
`;