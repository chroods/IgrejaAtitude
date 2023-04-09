import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import {AiFillHeart} from 'react-icons/ai';
import { embaixadasData } from "../../services/FotosSlide";
import { BoxEmbaixada } from "../../components/BoxEmb";
import {
    Container,
    ContentBoxs
} from "./styles"

export function Embaixada(){
    return(
        <Container>
            <Header />

            <div className="background-embaixada">
                <img src="../../src/assets/bc.jpg" alt="" />
                <div className="desc-legenda-embaixada">
                    <h3 className="desc1-embaixada">Mais que uma Embaixada</h3>
                    <h1 className="desc2-embaixada">Uma Familia!</h1>
                </div>
                <div className="busc-emb">
                    <span className="encontre">Encontre a sua</span>
                    <div className="flutuant"><AiFillHeart className="AiFillHeart" /></div>
                </div>
            </div>

            <ContentBoxs>
                {
                    embaixadasData.map((itens)=> (
                        <BoxEmbaixada
                            title={itens.name}
                            phone={itens.phone}
                            local={itens.andress}
                            lider={itens.lider}
                            link={itens.map}
                        />
                    ))
                }
            </ContentBoxs>

            <Footer />
        </Container>
    )
}