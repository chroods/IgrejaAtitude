import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import {AiFillHeart} from 'react-icons/ai'

export function Embaixada(){
    return(
        <Container>
            <Header />

            <div className="background-embaixada">
                <img src="../../src/assets/bc.jpg" alt="" />
                <div className="desc-legenda-embaixada">
                    <h3 className="desc1-embaixada">Mais que unha Embaixada</h3>
                    <h1 className="desc2-embaixada">Unha Familia!</h1>
                </div>
                <div className="busc-emb">
                    <span className="encontre">Encontre a sua</span>
                    <div className="flutuant"><AiFillHeart className="AiFillHeart" /></div>
                </div>
            </div>

            <div className="container-embaixadas">
                
                
            </div>

            <Footer />
        </Container>
    )
}