import React from 'react';
import { FooterContainer, FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterWrap,SocialMedia,SocialMediaWrap,SocialIconLink,SocialIcons,SocialLogo,WebsiteRights} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll'

import {FaFacebook,FaInstagram,FaYoutube,FaTwitter, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
      }
  return (
      <>    
      <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Features</FooterLinkTitle>
                        <FooterLink to='/'>Online Compiler</FooterLink>
                        <FooterLink to='/'>Note Making</FooterLink>
                        <FooterLink to='/'>Code Manager</FooterLink>
                        <FooterLink to='/'>Dark Mode</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Languages</FooterLinkTitle>
                        <FooterLink to='/'>C/C++</FooterLink>
                        <FooterLink to='/'>Java</FooterLink>
                        <FooterLink to='/'>Python</FooterLink>
                        <FooterLink to='/'>Ruby</FooterLink>
                        <FooterLink to='/'>Perl</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>support@codemate.in</FooterLink>
                        <FooterLink to='/'>Param Jani</FooterLink>
                        <FooterLink to='/'>+91 9898399741</FooterLink>
                        <FooterLink to='/'>Dhaval Agrawal</FooterLink>
                        <FooterLink to='/'>+91 9878789845</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to='/'>Terms &#38; Conditions</FooterLink>
                        <FooterLink to='/'>Privacy Policy</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Services</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Join Us</FooterLinkTitle>
                        <FooterLink to='/login'>Log In</FooterLink>
                        <FooterLink to='/signup'>Sign Up</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        CodeMate
                    </SocialLogo>
                    <WebsiteRights> CodeMate &#169; 2022 All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>

  );
};

export default Footer;