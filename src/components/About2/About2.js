import React from 'react';
import {About2Container, Img, DescriptionContainer, Header, Description} from './About2Elements';
import ScreenShot from '../../images/screenshot.png';

const About2 = () => {
    return (
        <About2Container >
            <DescriptionContainer>
                <Header>
                Intuitive and familiar UI allows users to hit the ground running.
                </Header>
                {/* <Description>
                Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.
                </Description> */}
            </DescriptionContainer>
            <Img src={ScreenShot} alt='sveltestorm IDE'/>
        </About2Container>
    )
}

export default About2
