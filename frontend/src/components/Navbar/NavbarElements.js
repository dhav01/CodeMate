import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'var(--dblue)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding 0 24px;
    // max-width: 1100px;
`

export const Logo = styled.img`
    width:10rem;
`
export const NavLogo = styled(LinkRouter)`
    // color:var(--white);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-item: center;
    margin: 15px 0 15px 0 ;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:var(--white);
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`
export const NavLinks = styled(LinkScroll)`
    color:var(--white);
    display:flex;
    font-size: 1.1rem;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;
    &.active{
        border-bottom: 5px solid var(--logoblue);
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width:768px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkRouter)`
    white-space: nowrap;
    margin-left:10px;
    font-weight: bold;
    font-size: 16px;
    cursor:pointer;
    text-decoration: none;
`