import React from 'react';
import './ContactStyle.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import {ContactSection,ContactH1,ContactContainer,ContactCard,ContactContent,ContactImgBx,ContactImg,ContactContentBx,ContactHeading,ContactSubtitle,Link,ContactIconList,ContactIcon1,ContactIcon2,ContactIcon3} from './ContactElements'
import img1 from '../../images/param.jpeg'
import img2 from '../../images/dhaval.jpeg';

const Contact = () => {
  return (
    <>
      <ContactSection id='contact'>
        <ContactH1>Meet Our Team</ContactH1> 
        <ContactContainer>
          <ContactCard className='card'>
            <ContactContent className='content'>
              <ContactImgBx>
                <ContactImg src={img1} alt="paramImg"/>
              </ContactImgBx>
              <ContactContentBx>
                <ContactHeading>
                  Param Jani
                  <br/>
                  <ContactSubtitle>Web Development enthusiast Like to solve challenges in frontend</ContactSubtitle>
                </ContactHeading>
              </ContactContentBx>
            </ContactContent>
            <ContactIconList>
              <ContactIcon1 className='icons'>
                  <Link href="https://www.linkedin.com/in/paramjani12/" target="_blank">
                    <LinkedInIcon/>
                  </Link>
              </ContactIcon1>
              <ContactIcon2 className='icons'>
                <Link href="janiparam12@gmail.com" target="_blank">
                  <MailIcon/>
                </Link>
              </ContactIcon2>
              <ContactIcon3 className='icons'>
                <Link href="https://github.com/paramjani12" target="_blank">
                  <GitHubIcon/>
                </Link>
              </ContactIcon3>
            </ContactIconList>
          </ContactCard>
          <ContactCard className='card'>
            <ContactContent className='content'>
              <ContactImgBx>
                <ContactImg src={img2} alt="dhavalImg"/>
              </ContactImgBx>
              <ContactContentBx>
                <ContactHeading>
                  Dhaval Agrawal
                  <br/>
                  <ContactSubtitle>Problem Solver<br/> Loves to build scalable systems</ContactSubtitle>
                </ContactHeading>
              </ContactContentBx>
            </ContactContent>
            <ContactIconList>
              <ContactIcon1 className='icons'>
                  <Link href="https://www.linkedin.com/in/dhaval-agrawal/" target="_blank">
                    <LinkedInIcon/>
                  </Link>
              </ContactIcon1>
              <ContactIcon2 className='icons'>
                <Link href="agrawaldhaval45@gmail.com" target="_blank">
                  <MailIcon/>
                </Link>
              </ContactIcon2>
              <ContactIcon3 className='icons'>
                <Link href="https://github.com/dhav01/" target="_blank">
                  <GitHubIcon/>
                </Link>
              </ContactIcon3>
            </ContactIconList>
          </ContactCard>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;