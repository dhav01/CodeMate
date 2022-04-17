import React from 'react';
import {FeatureContainer,FeatureH1,FeatureWrapper,FeatureRow,FeatureRow2,Column1,TextWrapper,TopLine,Heading,Subtitle, Column2, ImgWrap,Img } from './FeatureElements';
import img1 from '../../images/feature_note.svg';
import img2 from '../../images/feature_save.svg';
import img3 from '../../images/feature_dark.svg';

const Feature = () => {
  return(
      <>
        <FeatureContainer id='features'>
        <FeatureH1>Our Features</FeatureH1>
            <FeatureWrapper>
                <FeatureRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Note Making</TopLine>
                            <Heading>Take notes right beside your code</Heading>
                            <Subtitle>Staying organized as a programmer can be tough! So we provide note making where user pen down crutial points which they tend to forget in future like approach to the problem, time complexity, space complexity, optimization requirements and many more...</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img1} alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow>
                <FeatureRow2>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Code Manager</TopLine>
                            <Heading>Download, Edit, Access your code anytime</Heading>
                            <Subtitle>Developers can save and manage code of multiple programming language from a single location in a hassle-free manner. They can save their drive's memory and narrow down their time waste in maintaining the source files.</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img2}alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow2>
                <FeatureRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Light-On-Dark</TopLine>
                            <Heading>Reduce eye strain, Use dark mode</Heading>
                            <Subtitle>Programmers get both the options either to use traditional light mode or present-day hyped dark mode. Using dark mode can lead to some extra miles of battery and reduce blue light emissions which reduces eye strains.</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img3}alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow>
            </FeatureWrapper>
        </FeatureContainer>
      </>
  );
};

export default Feature;
