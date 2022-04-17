import React from 'react';
import img1 from '../../images/cicon.svg';
import img2 from '../../images/c++icon.svg';
import img3 from '../../images/javaicon.svg';
import img4 from '../../images/pythonicon.svg';
import img5 from '../../images/rubyicon.svg';
import img6 from '../../images/perlicon.svg';

import { SupportContainer,SupportH1,SupportWrapper,SupportCard,SupportIcon,SupportP,SupportH2 } from './SupportElements';
const Support = () => {
  return (
      <>
        <SupportContainer id='support'>
          <SupportH1>We Support</SupportH1>
          <SupportWrapper>
            <SupportCard  to="/directcode">
              <SupportIcon src={img1} alt="language" />
              <SupportH2>C</SupportH2>
              <SupportP>GCC 5.3.0</SupportP>
            </SupportCard>
            <SupportCard  to="/directcodecpp">
              <SupportIcon src={img2} alt="language"/>
              <SupportH2>C++ 17</SupportH2>
              <SupportP>GCC 11.1.0</SupportP>
            </SupportCard>
            <SupportCard to="/directcodejava">
              <SupportIcon src={img3} alt="language"/>
              <SupportH2>Java</SupportH2>
              <SupportP>JDK 17.0.1</SupportP>
            </SupportCard>
            <SupportCard to="/directcodepython">
              <SupportIcon src={img4} alt="language"/>
              <SupportH2>Python</SupportH2>
              <SupportP>python3 3.9.9</SupportP>
            </SupportCard>
            <SupportCard to="/directcoderuby">
              <SupportIcon src={img5} alt="language"/>
              <SupportH2>Ruby</SupportH2>
              <SupportP>ruby 3.0.2</SupportP>
            </SupportCard>
            <SupportCard to="/directcodeperl">
              <SupportIcon src={img6} alt="language"/>
              <SupportH2>Perl</SupportH2>
              <SupportP>perl 5.34.0</SupportP>
            </SupportCard>
          </SupportWrapper>
        </SupportContainer>
      </>
  );
};

export default Support;
