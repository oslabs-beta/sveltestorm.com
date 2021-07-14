import React, {useState} from 'react';
import SvelteStorm from '../../images/SvelteStormLogo/logo.svg';
import { HeroContainer, HeroBg, IconBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';
import { IconContext } from "react-icons";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Hero = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
    setHover(!hover);
};

    return (
        <IconContext.Provider value={{ border:"1px solid black"}}>
        <HeroContainer id='hero'>
            <HeroBg>
                <IconBg>
                    <AiOutlineThunderbolt/>
                </IconBg>
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
                     spy={true} 
                     smooth={true} 
                     offset={0} 
                     duration={500}
                    >
                        Download {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </IconContext.Provider>
    )
}

export default Hero;
