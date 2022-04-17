import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import { style } from '@mui/system';

export const HeroContainer = styled.div`
    background: var(--dblue);
    padding: 160px 0;
    color: var(--white);

`
export const HeroPart =styled.div`
    // background: var(--dblue);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 0 30px;
    width: 100%;
    // height: 800px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    // position: relative;
    z-index: 1;
    @media screen and (max-width: 768px){
        padding-right: 30px;
        padding-left: 30px;
    }

`

// export const HeroBg =styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `

// export const HeroCanvas = styled.canvas`
//     width:100%;
//     height:100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: var(--dblue);
// `

export const HeroRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-item: center;
    // flex-direction: row;
`
export const HeroColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    @media screen and (max-width:768px){
        padding-bottom: 65px;
    }
`


export const TopLine = styled.div`
    color: var(--white);
    font-size: 18px;
    line-height:16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`
export const Heading = styled.div`
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 48px;
    line-height:1.3;
    text-shadow: 4px 4px 1px var(--logoblue);
    color: var(--white);
`
export const Subtitle = styled.div
`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color:var(--white);
`
export const HeroButton = styled.div`
    margin-top: 32px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-item: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    margin-top: 2.5px;
    font-size:20px;
    font-weight:bold;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    margin-top: 2.5px;
    font-size:20px;
    font-weight:bold;

`
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-end;
`
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`

