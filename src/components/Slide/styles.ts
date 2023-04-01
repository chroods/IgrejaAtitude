import styled from "styled-components";

interface Props{
    colorText: string;
}

export const Container = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 90px);

    @keyframes animateSlide {
        0%{
            opacity: .6;
        }

        100%{
            opacity: 1;
        }
    }

    img{
        position: absolute;
        width: 100%;
        height: calc(100vh - 90px);
        object-fit: cover;
    }

    .showImageSlide{
        animation: animateSlide 1s both alternate;
    }
`;

export const ButtonSlide = styled.button`
    z-index:1;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    font-size: 2rem;
    opacity: .3;
    cursor:pointer ;
    transition: 300ms all ease-in-out;

    &:hover{
        opacity: 1;
        background: rgba(0,0,0,0.3);
        transition: 300ms all ease-in-out;
        color: #fff;
    }
`;

export const LegendaImgSlide = styled.div<Props>`
    z-index: 1;
    font-weight: 700;
    font-size: 2rem;
    color: ${({colorText}) => colorText};
    text-align: center;
`;

export const CirclesSlide = styled.div`
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    gap: 10px;
`;

export const CircleSlide = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;
