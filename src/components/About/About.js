import React from 'react';
import { IoIosRefreshCircle } from 'react-icons/io';
import { IconContext } from "react-icons";
import { RiOpenSourceFill } from "react-icons/ri";
import { GoBrowser } from "react-icons/go";
import { AiOutlineApartment } from "react-icons/ai";
import { AboutContainer, Header, Description, FeaturesContainer, FeatWrapper, FeatureDescription } from './AboutElements';

const About = () => {
    return (
        <IconContext.Provider value={{ color: "orange", size: '5em' }}>
        <AboutContainer id='about' >
            <Header>
                What is Svelte Storm?
            </Header>
            <Description>
             Svelte is an open-source IDE with a built-in State Manager window for viewing your project in real-time, SvelteStorm will aid
             the rapidly growing Svelte community. With additional features like file directory access and a built-in terminal, its 
             introduction to this community will soon prove invaluable. SvelteStorm was built using Svelte and Electron and is
             downloadable for Windows, Linux, and Mac operating systems. We are hoping to provide a foundation to incorporate the
             tooling and backing that Svelte deserves. In providing this platform, we hope the community feels supported in their
             navigation of this framework as it continues to grow.
            </Description>
            <FeaturesContainer>
                <FeatWrapper>
                    <RiOpenSourceFill/>
                    <FeatureDescription>
                        Open Source
                    </FeatureDescription>
                </FeatWrapper>
                <FeatWrapper>
                <AiOutlineApartment/>                    
                    <FeatureDescription>
                        Built in State Manager 
                    </FeatureDescription>
                </FeatWrapper>
                <FeatWrapper>
                <GoBrowser/>
                    <FeatureDescription>
                        Live Browser Window
                    </FeatureDescription>
                </FeatWrapper>
            </FeaturesContainer>
            
        </AboutContainer>
        </IconContext.Provider>
    )
}

export default About
