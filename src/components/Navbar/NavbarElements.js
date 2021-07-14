// Styled Components for NavBar
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
background: white;
height:80px;
/* margin-top:-80px; */
display:flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
box-shadow: 0 3px 4px 0 rgba(0,0,0,.2);
/* border: 2px solid red; */

@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1700px;
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`
export const SSLogo = styled.img`
height: 1.5rem;
margin-right: 8px;
align-self: flex-end;
margin-bottom: 26px;
`

export const NavLogo = styled(LinkScroll)`
color: #444;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
/* margin-left: 24px; */
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

/* media queries change layout based on rules or device */
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff}
`;

export const NavMenu =styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;

@media screen and (max-width: 786px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
color: #242424;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
    color: #ff3c00;
}
/* highlights under nav links */
&.active {
    border-bottom: 3px solid #ff3c00;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items:center;

@media screen and (max-width:786px) {
    display: none;
}
`;

// sign in button
export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;