import styled from 'styled-components';

export const FeatureContainer = styled.div`
    color: var(--dblue);
    height: 1450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    @media screen and (max-width: 768px){
        height: 2400px;
    }
    @media screen and (max-width: 480px){
        height: 2200px;
    }
`
export const FeatureH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--dblue);
    align-item: center;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const FeatureWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 24px 0px;
    justify-content: center;

`

export const FeatureRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';
    @media screen and (max-width: 768px){
        grid-template-areas: 'col1''col2';
    }
`
export const FeatureRow2 = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px){
        grid-template-areas: 'col1''col2';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 548px;
    padding-top: 0px;
    padding-bottom: 50px;
`
export const TopLine = styled.p`
    color: var(--dblue);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
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
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: var(--dblue);
`

export const ImgWrap = styled.div`
    max-width:555px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`