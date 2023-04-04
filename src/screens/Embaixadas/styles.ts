import styled from "styled-components";

export const Container = styled.div`
    .background-embaixada{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .background-embaixada::after{
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 99%;
        background-color: rgba(0,0,0,0.5);
    }

    .background-embaixada img{
        position: relative;
        width: 100%;
        object-fit: cover;
        height: 70vh;
    }

    .desc-legenda-embaixada{
        position: absolute;
        top: 20vh;
        width: 100%;
        padding: 20px;
        color: #fff;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .desc1-embaixada{font-size: 1.3rem;}
    .desc2-embaixada{font-size: 2.5rem;}

    .busc-emb{
        position: absolute;
        width: 100%;
        bottom: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        color: #fff;
    }

    .flutuant{
        position: relative;
        font-size: 2.5rem;
        color: #E9081A;
        animation: identifier 5s infinite;
    }

    @keyframes identifier {
        0%{
            transform:translateY(0);
        }

        50%{
            transform: translateY(40px);
        }

        100%{
            transform: translateY(0);
        }
    }

    /*Container*/
    .container-embaixadas{
        position: relative;
        width: 100%;
        margin-top: 30px;
        padding: 10px 15px;
        font-family: 'Roboto', sans-serif;
    }

    @media (min-width:1023px){
        /*background*/
        .desc1-embaixada{font-size: 2rem;}
        .desc2-embaixada{font-size: 3.5rem;}

        /*Box*/
        .box-embaixadas{max-width: 250px;}
    }

`;