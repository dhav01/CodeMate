import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    background: var(--logoblue);
    white-space: nowrap;
    padding: 14px 48px;
    color: var(--white);
    font-size: 20px;
    outline: none;
    font-weight:bold;
    border:none;
    text-decoration: none;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: var(--white);
        color: var(--logoblue);
    }
`