/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { FaBars } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import { IconContext } from "react-icons";
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggleMenu }) => {



    return (
        <IconContext.Provider value={{ color: "#ff3c00", size: '3em' }}>
        <>
        <Nav>
            <NavbarContainer>
             <NavLogo to='hero' spy={true} smooth={true} offset={-80} duration={500}> Svelte Storm</NavLogo>
             <MobileIcon onClick={toggleMenu}>
                 <FaBars size='1.3em'/>
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
                 {/* <NavBtnLink to='/signin'> Sign In </NavBtnLink> */}
                 <a href="https://github.com/oslabs-beta/sveltestorm.com" target="_blank" rel="noopener noreferrer">
                 <AiFillGithub/>
                 </a>
             </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
        </IconContext.Provider>
    );
};

export default Navbar;
