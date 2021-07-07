import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { TeamContainer, Header, GroupContainer, TeamWrapper, Img, LinkWrapper, Linkedin, Git, Name } from './TeamElements';

const Team = () => {
    return (
        <IconContext.Provider value={{ color: "#ff3c00", size: '1.5em' }}>
        <TeamContainer id='meet'>
            <Header>
                 Meet the Team
            </Header>
            <GroupContainer>
                <TeamWrapper>
                    <Img />
                    <IoPersonCircleSharp size='15em'/>
                    <Name>
                        Arron Nestor
                    </Name>
                    <LinkWrapper>
                    <AiFillGithub />
                    <AiFillLinkedin />
                    </LinkWrapper>
                </TeamWrapper>

                <TeamWrapper>
                    <Img />
                    <IoPersonCircleSharp size='15em'/>
                    <Name>
                        Frank Iforgot
                    </Name>
                    <LinkWrapper>
                    <AiFillGithub />
                    <AiFillLinkedin />
                    </LinkWrapper>
                </TeamWrapper>

                <TeamWrapper>
                    <Img />
                    <IoPersonCircleSharp size='15em'/>
                    <Name>
                        Kevin Sarchi
                    </Name>
                    <LinkWrapper>
                    <AiFillGithub />
                    <AiFillLinkedin />
                    </LinkWrapper>
                </TeamWrapper>

                <TeamWrapper>
                    <Img />
                    <IoPersonCircleSharp size='15em'/>
                    <Name>
                        Aye Moe
                    </Name>
                    <LinkWrapper>
                    <AiFillGithub />
                    <AiFillLinkedin />
                    </LinkWrapper>
                </TeamWrapper>

                <TeamWrapper>
                    <Img />
                    <IoPersonCircleSharp size='15em'/>
                    <Name>
                        Sam Filip
                    </Name>
                    <LinkWrapper>
                    <AiFillGithub />
                    <AiFillLinkedin />
                    </LinkWrapper>
                </TeamWrapper>

            </GroupContainer>
        </TeamContainer>
    </IconContext.Provider>
    )
}

export default Team
