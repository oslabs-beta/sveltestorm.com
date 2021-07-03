import React from 'react'
import { DiLinux, DiWindows, DiApple  } from 'react-icons/di'
import { IconContext } from "react-icons";
import { DownloadContainer, IconWrapper, Header } from './DownloadElements'

const Download = () => {
    return (
        <IconContext.Provider value={{ color: "#ff3c00", size: '5em' }}>
        <DownloadContainer id='download'>
            <Header>
                Download
            </Header>
            <IconWrapper>
                <DiLinux/>
                <DiWindows/>
                <DiApple/>
            </IconWrapper>
        </DownloadContainer>
        </IconContext.Provider>
    )
}

export default Download
