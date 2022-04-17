import React, { useState } from 'react';
import { Button } from '../Button';
import img from '../../images/hero_photo.svg'
import { HeroContainer,HeroPart,Heading,HeroRow, HeroColumn,TextWrapper,TopLine, Subtitle,HeroButton,ArrowForward,ArrowRight,ImgWrapper,Img } from './HeroElements';
import Typical from 'react-typical';

const HeroSection = () => {
  const [hover,sethover] = useState(false);
  const onHover = () =>{
    sethover(!hover)
  }
  return (
      <HeroContainer>
        <HeroPart>
          <HeroRow>
              <HeroColumn>
                <TextWrapper>
                  <TopLine>Hello World!!!
                  </TopLine>
                  <Heading>Code &lt;&#47;&gt; Compile... <br/> Run⏩ Repeat🔁</Heading>
                  <Subtitle>CodeMate provides free, online code editor where programming enthusiasts can ship coffee into code. Start coding in seconds without any setup. We make sure users gets most stable and updated compiler. <br/>We support
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[' C (GCC 11.1.0)',2000,' ',2000,' C++ (GCC 11.1.0)',2000,' ',2000,' JAVA (JDK 17.0.1)',2000,' ',2000,' Python (3.9.9)',2000,' ',2000,' Ruby (3.0.2)',2000,' ',2000,' Perl (5.34.0)',2000,' ',2000]}
                      />
                  </Subtitle>
                  <HeroButton>
                    <Button to='/directcode' onMouseEnter={onHover} onMouseLeave={onHover}>
                      Start Coding {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                  </HeroButton>
                </TextWrapper>
              </HeroColumn>
              <HeroColumn>
                <ImgWrapper>
                    <Img src={img} alt="herophoto"/>
                </ImgWrapper>
              </HeroColumn>
          </HeroRow>
        </HeroPart>
      </HeroContainer>
  );
};

export default HeroSection;
