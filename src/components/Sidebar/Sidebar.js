import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    Anchor,
    SSLogo
} from './SidebarElements';
import logo from '../../images/SvelteStormLogo/logo.svg'

const Sidebar = ({toggleMenu, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggleMenu} spy={true} smooth={true} offset={0} duration={500}> About </SidebarLink>
                    <SidebarLink to='meet' onClick={toggleMenu} spy={true} smooth={true} offset={0} duration={500}> Meet the Team </SidebarLink>
                    <SidebarLink to='download' onClick={toggleMenu} spy={true} smooth={true} offset={0} duration={500}> Download </SidebarLink>
                    <Anchor href="https://github.com/oslabs-beta/SvelteStorm" target="_blank" rel="noopener noreferrer"> Github </Anchor>
                    <SidebarLink to='download' onClick={toggleMenu} spy={true} smooth={true} offset={0} duration={500}> Medium </SidebarLink>
                    <SSLogo src={logo}/>
                </SidebarMenu>
                {/* <SideBtnWrap>
                   <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
