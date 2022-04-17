import React from 'react';
import { Button } from '@mui/material';
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="features" onClick={toggle}>
                        Feature
                    </SidebarLink>
                    <SidebarLink to="support" onClick={toggle}>
                        Support
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">
                        <Button variant="outlined">Log In</Button>
                    </SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to="/signup">
                        <Button variant="contained">Sign Up</Button>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
