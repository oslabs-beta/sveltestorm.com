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
             <NavLogo to='hero'> Svelte Storm</NavLogo>
             <MobileIcon onClick={toggleMenu}>
                 <FaBars size='1.3em'/>
             </MobileIcon>
             <NavMenu>
                 <NavItem>
                     <NavLinks to='about'> About </NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='meet'> Meet the Team </NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='download'> Download </NavLinks>
                 </NavItem>
                 {/* <NavItem>
                     <NavLinks to='signup'> Sign Up </NavLinks>
                 </NavItem> */}
             </NavMenu>
             <NavBtn>
                 {/* <NavBtnLink to='/signin'> Sign In </NavBtnLink> */}
                 <AiFillGithub/>
             </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
        </IconContext.Provider>
    );
};

export default Navbar;
