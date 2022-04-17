import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Button } from '@mui/material';
import {Nav,NavbarContainer,NavLogo,Logo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElements";
import img1 from "../../images/logo.svg";
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav] = useState(false)
  const changeNav = () =>{
    if(window.scrollY>=80)
    {
      setScrollNav(true);
    }
    else
    {
      setScrollNav(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeNav);
  },[]);

  const toggleHome = () =>{
    scroll.scrollToTop();
  }
  return(
      <>
        <Nav scrollNav={scrollNav}> 
            <NavbarContainer> 
              <NavLogo to='/' onClick={toggleHome}>
                <Logo src={img1} alt="icon"/>
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to='features' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Features</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='support' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Support</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/login">
                    <Button variant="outlined" color="primary" style={{fontWeight:'bold'}}>Log In</Button>
                  </NavBtnLink>
                  <NavBtnLink to="/signup">
                    <Button variant="contained" color="primary" style={{fontWeight:'bold'}}>Sign Up</Button>
                  </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
