import styled from 'styled-components';
import Colours from '../Colours';

export const NavBarDiv = styled.div`
    ${props =>
        props.Light &&
        `background-color:${Colours.Light}; color:${Colours.Dark};`}

    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
    height: 60px;
    @media screen and (min-width: 768px) {
        padding: 0px 50px;
        height: 90px;
    }
    @media screen and (min-width: 1024px) {
        height: 0px;
        padding: 45px 0;
    }
    @media screen and (min-width: 1600px) {
        padding: 60px 0;
    }
`;

export const DropDown = styled.div`
    transform: translateX(${props => (props.open ? '0%' : '-100%')});
    width: 100vw;
    height: 100vh;
    transition: transform 250ms ease-out;
    display: flex;
    position: absolute;
    box-sizing: border-box;
    z-index: 2;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;
export const DropDownContainer = styled.div`
    width: 50vw;
    height: 100vh;
    transition: transform 250ms ease-out;
    display: flex;
    flex-direction: column;
    ${props =>
        props.Light
            ? `background: ${Colours.Dark};`
            : `background: ${Colours.Light};`}
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const DropDownLink = styled.a`
    font-size: clamp(1.5rem, 4vw, 6rem);
    font-weight: 500;
    position: relative;
    color: ${Colours.Dark};
    transition: transform 400ms ease-in;
    &:first-child {
        margin-bottom: 40px;
    }
    &:last-child {
        margin-top: 40px;
    }

    &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: white;
        left: 50%;
        bottom: -10px;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        transform: scale(1.125);
        &:after {
            width: 100%;
            left: 0%;
        }
    }
`;

export const Heading = styled.h1`
    position: relative;
    z-index: 2;
    font-weight: 600;
    font-size: clamp(16px, 1.8vw, 1.8rem);
    position: absolute;
    left: 30px;
    @media screen and (min-width: 768px) {
        left: 50px;
    }
    @media screen and (min-width: 1024px) {
        left: 60px;
    }
`;

export const DesktopMenu = styled.div`
    display: none;
    @media screen and (min-width: 1024px) {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const NavLink = styled.a`
    position: relative;
    font-size: clamp(14px, 2vw, 16px);
    transition: all 300ms ease-in;
    font-weight: 400;
    position: relative;
    &:hover {
        color: orange;
    }
`;
export const ButtonLink = styled.a`
    position: relative;
    font-size: clamp(14px, 1vw, 18px);
    font-weight: 600;
    text-transform: uppercase;
    width: 100%;
    padding: 0.8em 3em;
    text-align: center;
    transition: all 200ms ease-in-out;
    &:after {
        content: '\f1d8';
        font-family: FontAwesome;
        position: absolute;
        transform: scale(0, 1);
        left: 0;
        width: 100%;
        transition: all 200ms ease-in-out;
    }
    &:hover {
        color: ${Colours.Dark};
        transform: scale(1.1);
        &:after {
            color: orange;
            transform: scale(1, 1);
        }
    }
`;

export const RoundedButton = styled.span`
    display: none;
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        position: absolute;
        cursor: pointer;
        overflow: hidden;
        right: 60px;
        background-color: ${Colours.Button};
        color: ${Colours.Light};
        transition: all 700ms ease;
        &:hover {
            border: 1px solid orange;
        }
    }
`;
