import React from 'react';
import { AboutColumn1, AboutColumn2, AboutContainer, AboutH1, AboutHeading, AboutImg, AboutImgWrap, AboutSubtitle, AboutTextWrapper, AboutWrapper, AboutRow } from './AboutElements';
import img from '../../images/about.jpg';
const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutH1>About Us</AboutH1>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <AboutTextWrapper>
                <AboutHeading>Our Story.</AboutHeading>
                <AboutSubtitle>We are group of two undergraduate students, Param Jani &#38; Dhaval Agrawal pursuing majors in computer science. Every semester we used to install setup of new programming language, save the code files on our drives, arrange and manage all those files in orderly fashion, keep the version of the language upto date. This was a humdrum task for us and many other fellow students. These problems became seeds of CodeMate. We decided to built an online free code editor with all the features like save, access, edit codes, dark mode, note making. Users can jot down approach, time and space complexity beside their code. We make sure that the platform is ad-free, so that user can achieve focused and productive outcomes</AboutSubtitle>
              </AboutTextWrapper>
            </AboutColumn1>
            <AboutColumn2>
              <AboutImgWrap>
                <AboutImg src={img} alt="aboutImg"/>
              </AboutImgWrap>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;