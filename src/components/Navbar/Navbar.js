/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { FaBars } from 'react-icons/fa';
import {AiFillGithub, AiFillMediumCircle} from 'react-icons/ai';
import { IconContext } from "react-icons";
import { SiSvelte } from "react-icons/si";
import SvelteStorm from "../../images/SvelteStormLogo/logo.svg";
import SvelteLogo from "../../images/sveltelogo.svg";
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    LogoContainer,
    SSLogo,
    Anchor,
    Anchor2,
    Svelte
} from './NavbarElements';

const Navbar = ({ toggleMenu }) => {



    return (
        <IconContext.Provider value={{ color: "#ff3c00" }}>
        <>
        <Nav>
            <NavbarContainer>
                <LogoContainer>
                <SSLogo src={SvelteStorm} />
             <NavLogo to='hero' spy={true} smooth={true} offset={-80} duration={500}> Svelte Storm</NavLogo>
             </LogoContainer>
             <MobileIcon onClick={toggleMenu}>
                 <FaBars />
             </MobileIcon>
             <NavMenu>
                 <NavItem>
                     <NavLinks to='about' spy={true} smooth={true} offset={0} duration={500}> About </NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='meet' spy={true} smooth={true} offset={0} duration={500}> Meet the Team </NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='download' spy={true} smooth={true} offset={0} duration={500}> Download </NavLinks>
                 </NavItem>
                 {/* <NavItem>
                     <NavLinks to='signup'> Sign Up </NavLinks>
                 </NavItem> */}
             </NavMenu>
             <NavBtn>
                 <Anchor href="https://github.com/oslabs-beta/SvelteStorm" target="_blank" rel="noopener noreferrer">
                 <AiFillGithub/>
                 </Anchor>
                 <Anchor href="https://arronnestor.medium.com/sveltestorm-sveltes-first-ide-83ad1f1a9803" target="_blank" rel="noopener noreferrer">
                 <AiFillMediumCircle/>
                 </Anchor>
                 <Anchor2 href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
                 <Svelte src={SvelteLogo} alt="Svelte" />
                 </Anchor2>
             </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
        </IconContext.Provider>
    );
};

export default Navbar;
