import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from './SidebarElements';

const Sidebar = ({toggleMenu, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggleMenu}> About </SidebarLink>
                    <SidebarLink to='team' onClick={toggleMenu}> Meet the Team </SidebarLink>
                    <SidebarLink to='download' onClick={toggleMenu}> Download </SidebarLink>
                    <SidebarLink to='download' onClick={toggleMenu}> Github </SidebarLink>
                    <SidebarLink to='download' onClick={toggleMenu}> Medium </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                   <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
