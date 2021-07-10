import React from 'react';
import {About2Container, Img, DescriptionContainer, Header, Description} from './About2Elements';
import Coding from '../../images/Coding.svg';
const About2 = () => {
    return (
        <About2Container >
            <DescriptionContainer>
                <Header>
                    Heading 
                </Header>
                <Description>
                Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.
                </Description>
            </DescriptionContainer>
            <Img src={Coding} alt='sveltestorm ide'/>
        </About2Container>
    )
}

export default About2
