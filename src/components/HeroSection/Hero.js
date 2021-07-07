import React, {useState} from 'react';
import Svelte from '../../images/svelte_js.png';
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';

const Hero = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
    setHover(!hover);
};

    return (
        
        <HeroContainer id='hero'>
            <HeroBg>
                {/* <ImageBg src={Svelte} alt='svelte' type='image' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1> SVELTE STORM MOTHAFUCKAS</HeroH1>
                <HeroP>
                    Download the best IDE NOW!!!
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                     to='download' 
                     onMouseEnter={onHover} 
                     onMouseLeave={onHover} 
                     primary='true'
                     dark='true' 
                    >
                        Download {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
