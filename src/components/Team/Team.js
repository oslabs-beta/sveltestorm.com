import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { IconContext } from "react-icons";
import { TeamContainer, Header, GroupContainer, TeamWrapper, Img, LinkWrapper, Linkedin, Git, Name, Anchor } from './TeamElements';
import Aye from '../../images/Contributers/Aye.png';
import Frank from '../../images/Contributers/Frank.png';
import Arron from '../../images/Contributers/Arron.png';
import Sam from '../../images/Contributers/Sam.png';
import Kevin from '../../images/Contributers/Kevin.png';

const Team = () => {

    const contributers = [
        {name:'Aye Moe', git: 'https://github.com/ayemmoe', linkedin: 'https://www.linkedin.com/in/ayemmoe/', src: Aye}, 
        {name:'Arron Nestor',git: 'https://github.com/NesTar6', linkedin: 'https://www.linkedin.com/in/arron-nestor/', src: Arron},
        {name:'Sam Filip',git: 'http://github.com/samfilip', linkedin: 'https://www.linkedin.com/in/sam-filip', src:Sam},
        {name:'Frank Stepanski',git: 'https://github.com/frankstepanski', linkedin: 'https://www.linkedin.com/in/frankstepanski/', src: Frank},
        {name:'Kevin Sarchi',git: 'https://github.com/Svrchi', linkedin: 'https://www.linkedin.com/in/kevin-sarchi', src: Kevin}
    ];


    return (
        <IconContext.Provider value={{ color: "#ff3c00", size: '1em' }}>
        <TeamContainer id='meet'>
            <Header>
                 Meet the Team
            </Header>
            <GroupContainer>
                {contributers.map((el, i)=> {
                return <TeamWrapper key={i}> 
                            <Img src= {el.src}/> 
                                <Name>
                                    {el.name}
                                </Name>
                                <LinkWrapper>
                                    <Anchor href={el.git} target="_blank" rel="noopener noreferrer">
                                        <AiFillGithub/>
                                    </Anchor>
                                    <Anchor href={el.linkedin} target="_blank" rel="noopener noreferrer">
                                        <AiFillLinkedin/>
                                    </Anchor>
                                </LinkWrapper>
                    </TeamWrapper>
            })    
        }
            </GroupContainer>
        </TeamContainer>
    </IconContext.Provider>
    )
}

export default Team
