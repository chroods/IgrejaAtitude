import React, {useState}  from 'react'
import { 
    Container,
    ButtonSlide,
    LegendaImgSlide
 } from './styles'
import {HiArrowLeft} from 'react-icons/hi';
import {HiArrowRight} from 'react-icons/hi'
import slide from '../../services/FotosSlide';


export function Slide(){
    const [currentSlite, setCurrentSlite] = useState(0);

    function handleNext(){
        setCurrentSlite(currentSlite === slide.length - 1? 0 : currentSlite + 1);
    }

    function handlePrev(){
        setCurrentSlite(currentSlite === 0 ? slide.length - 1 : currentSlite - 1 );
    }

    console.log(slide[0].title)
    return(
        <Container>
            <ButtonSlide onClick={handlePrev}>
                <HiArrowLeft name='HiArrowLeft'/>
            </ButtonSlide>
            <img src={slide[currentSlite].img}/>
            <LegendaImgSlide>{slide[currentSlite].title}</LegendaImgSlide>
            <ButtonSlide onClick={handleNext}>
                <HiArrowRight name='HiArrowRight'/>
            </ButtonSlide>
        </Container>
    )
}