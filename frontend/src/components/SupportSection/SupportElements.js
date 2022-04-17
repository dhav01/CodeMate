import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SupportContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--dblue);
    @media screen and (max-width: 1000px){
        height: 1200px;
    }
    @media screen and (max-width:768px){
        height: 2200px;
    }
    // for phones
    @media screen and (max-width: 480px){
        height: 2200px;
    }
`

export const SupportWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-item: center;
    grid-gap: 50px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const SupportCard = styled(Link)`
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
        box-shadow: 0px 0px 8px 8px var(--logoblue);
    }
`

export const SupportIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const SupportH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const SupportH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-decoration: none;
    color:#1D3557
`

export const SupportP = styled.p`
    font-size: 1rem;
    text-align: center;
    color:#1D3557

`