import React, {useState, useEffect}  from 'react'
import { 
    Container,
    ButtonSlide,
    LegendaImgSlide,
    CirclesSlide,
    CircleSlide
 } from './styles'
import {HiArrowLeft} from 'react-icons/hi';
import {HiArrowRight} from 'react-icons/hi'
import slide from '../../services/FotosSlide';


export function Slide(){
    const [currentSlite, setCurrentSlite] = useState(0);
    const [mouseHover, setMouseHver] = useState(false)
    const [classSlite, setClassSlite] = useState('hidden')
    
    function handleNext(){
        setCurrentSlite(currentSlite === slide.length - 1? 0 : currentSlite + 1);
    }

    function handlePrev(){
        setCurrentSlite(currentSlite === 0 ? slide.length - 1 : currentSlite - 1 );
    }

    function handleMouseHpover(){
        setMouseHver(!mouseHover)
        console.log(mouseHover)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if(!mouseHover){
                setCurrentSlite(currentSlite === slide.length - 1 ? 0 : currentSlite + 1);
                setClassSlite('showImageSlide')  
            }

            setTimeout(()=>{
                setClassSlite('hidden')
            },2000)
        }, 5000);
    
        return () => clearInterval(interval)
    }, [currentSlite, mouseHover, classSlite]);

    return(
        <Container>
            <ButtonSlide onClick={handlePrev}>
                <HiArrowLeft name='HiArrowLeft'/>
            </ButtonSlide>
            <img 
                className={classSlite}
                src={slide[currentSlite].img} 
                onMouseEnter={handleMouseHpover}
                onMouseLeave={handleMouseHpover}
            />
            <LegendaImgSlide colorText={slide[currentSlite].colorText}>
                {slide[currentSlite].title ? slide[currentSlite].title : ""}
            </LegendaImgSlide>
            <ButtonSlide onClick={handleNext}>
                <HiArrowRight name='HiArrowRight'/>
            </ButtonSlide>

            <CirclesSlide>
                {
                    slide.map((item)=> (
                        <CircleSlide style={{backgroundColor: slide[currentSlite].id === item.id ? '#fff' : 'rgba(0,0,0,0.5)'}}>
                                
                        </CircleSlide>
                    ))
                }
            </CirclesSlide>
        </Container>
    )
}