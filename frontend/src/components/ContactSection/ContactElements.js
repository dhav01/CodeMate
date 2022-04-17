import styled from 'styled-components';

export const ContactSection = styled.section`
    background: var(--dblue);
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 820px;
    @media screen and (max-width:768px){
        height: 1300px;
    }
`
export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ContactContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-wrap: wrap;
    margin: 20px 0;
`
export const ContactCard = styled.div`
    position: relative;
    width: 300px;
    height: 440px;
    background: rgba(255,255,255,0.06);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    margin: 20px 50px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px) saturate(180%);
    &:hover{
        opacity: 1;
    } 
`
export const ContactContent = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s;
    opacity: 0.7;
`
export const ContactImgBx = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow:hidden;
    border: 10px solid rgba(0,0,0,0.25);
`
export const ContactImg = styled.img`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
`
export const ContactContentBx = styled.div`

`
export const ContactHeading = styled.h3`
    color:var(--white);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 10px;
    line-height: 1.2em;

`
export const ContactSubtitle = styled.span`
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
`
export const ContactIconList = styled.ul`
    position: absolute;
    bottom: 50px;
    display: flex;

`
export const ContactIcon1 = styled.li`
    --i:1;
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    opacity: 0;
    transition: 0.5s;
    transition-delay: calc(0.1s*var(--i));
`
export const ContactIcon2 = styled.li`
    --i:2;
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    opacity: 0;
    transition: 0.5s;
    transition-delay: calc(0.1s*var(--i));
`
export const ContactIcon3 = styled.li`
    --i:3;
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    opacity: 0;
    transition: 0.5s;
    transition-delay: calc(0.1s*var(--i));
`

export const Link = styled.a`
    color: var(--white);
    font-size: 24px;
`