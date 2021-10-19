import React, { useState } from 'react';
import Video from '../../../../../assets/videos/relax women.mp4';
import Banner from '../../../../../assets/images/FOTOS LANDING PAGE/Banner inicio.png'
import history from '../../../../../history';
import { HeroContainer, HeroBg, VideoBg, HeroBanner } from './HeroElements';
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../buttonElement_sc';
import useAuth from 'app/hooks/useAuth';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const { isAuthenticated } = useAuth();

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* *Se deja el videoBg comentado porque originalmente se utilizaría este tipo de contenido para la landing page, en caso de reutilziarse el video */}
                {/* <VideoBg  autoPlay loop muted src= { Video } type='video/mp4'/> */}
                <HeroBanner src={Banner} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Empieza a vivir con la libertad que mereces</HeroH1>
                <HeroP>Sanus te acompaña</HeroP>
                {   isAuthenticated 
                ?   null 
                :   <HeroBtnWrapper>
                        <Button 
                            to='/session/signup'
                            onClick={() =>{
                                history.push('/session/signup')
                            }} 
                            onMouseEnter = {onHover}
                            onMouseLeave = {onHover}
                            primary = 'true'
                            dark = 'true'
                            fontbig = 'true'
                        >
                        
                            Regístrate { hover ? <ArrowForward /> : <ArrowRight />} 
                        </Button>
                    </HeroBtnWrapper>
                }
            </HeroContent>

        </HeroContainer>
    )

}

export default HeroSection;