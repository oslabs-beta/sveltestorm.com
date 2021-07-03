import React from 'react';
import { IoIosRefreshCircle } from 'react-icons/io';
import { IconContext } from "react-icons";
import { AboutContainer, Header, Description, FeaturesContainer, FeatWrapper, FeatureDescription } from './AboutElements';

const About = () => {
    return (
        <IconContext.Provider value={{ color: "orange", size: '5em' }}>
        <AboutContainer id='about' >
            <Header>
                What is SvelteStorm
            </Header>
            <Description>
            description description description description 
            description description description description 
            description description description description 
            description description description description
            </Description>
            <FeaturesContainer>
                <FeatWrapper>
                    <IoIosRefreshCircle/>
                    <FeatureDescription>
                        Hot Modulle reloading
                    </FeatureDescription>
                </FeatWrapper>
                <FeatWrapper>
                <IoIosRefreshCircle/>                    
                    <FeatureDescription>
                        State Management 
                    </FeatureDescription>
                </FeatWrapper>
                <FeatWrapper>
                <IoIosRefreshCircle/>
                    <FeatureDescription>
                        Live Server Window
                    </FeatureDescription>
                </FeatWrapper>
            </FeaturesContainer>
            
        </AboutContainer>
        </IconContext.Provider>
    )
}

export default About
