import styled from "styled-components";


export const AboutContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    @media screen and (max-width:768px){
        height: 1250px;
    }
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--dblue);
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 0px 0px 0px;
    justify-content: center;

`

export const AboutRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';
    @media screen and (max-width: 768px){
        grid-template-areas: 'col1''col2';
    }
`

export const AboutColumn1 = styled.div`
    // margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const AboutColumn2 = styled.div`
    // margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const AboutTextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0px;
    padding-bottom: 50px;
`
export const AboutHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    text-shadow: 2px 2px 1px var(--logoblue);

    line-height: 1.1;
    font-weight: 600;
    color: var(--dblue);
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const AboutSubtitle = styled.p`
    max-width: 550px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: var(--dblue);
`

export const AboutImgWrap = styled.div`
    max-width:555px;
    height: 100%;
`
export const AboutImg = styled.img`
    width: 100%;
    margin: 0 0 60px 0;
    padding-right: 0;
`