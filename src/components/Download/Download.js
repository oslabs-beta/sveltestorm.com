import React from 'react'
import { DiLinux, DiWindows, DiApple  } from 'react-icons/di'
import { IconContext } from "react-icons";
import { 
    DownloadContainer,
    GifContainer,DataContainer, 
    IconWrapper, 
    Header, 
    Copyright, 
    Wrapper, 
    Footer, 
    Overlay, 
    Anchor  } 
    from './DownloadElements';

const Download = () => {
    return (
    <IconContext.Provider value={{ color: "rgb(255, 60, 0)", size: '5em' }}>
        <DownloadContainer id='download'>
        <Wrapper>
                <Header>
                    Download
                </Header>
            <DataContainer>
                    <IconWrapper>
                        <Anchor href="https://github.com/oslabs-beta/SvelteStorm" target="_blank" rel="noopener noreferrer">
                            <DiLinux/>
                        </Anchor>
                        <Anchor href="https://github.com/oslabs-beta/SvelteStorm" target="_blank" rel="noopener noreferrer">
                            <DiWindows/>
                        </Anchor>
                        <Anchor href="https://github.com/oslabs-beta/SvelteStorm" target="_blank" rel="noopener noreferrer">
                            <DiApple/>
                        </Anchor>
                    </IconWrapper>
            </DataContainer>        
                <Footer>
                    {/* <Copyright> 
                        ©Copyright. All rights reserved.
                    </Copyright> */}
                </Footer>
            </Wrapper>
            {/* <GifContainer >
                <Overlay/>
            </GifContainer> */}
        </DownloadContainer>
    </IconContext.Provider>
    )
}

export default Download;
