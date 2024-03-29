import styled from 'styled-components';
import Colours from '../../comps/Colours';

export const MainTextContainer = styled.div`
    margin-top: 14vh;
    @media screen and (min-width: 1024px) {
        margin-bottom: 120px;
        margin-top: 0;
        margin-left: 10vw;
    }
`;

export const ContentImage = styled.img`
    width:80%:
    max-height:80vh;
`;

export const SmallText = styled.h3`
    display: none;
    opacity: 0.6;
    font-weight: 400;
    font-family: 'Inconsolata', monospace;
    height: 1em;
    text-transform: capitalise;
    @media screen and (min-width: 768px) {
        display: block;
        font-size: clamp(16px, 1vw, 3rem);
        margin: 2em 0;
    }
`;

export const FirstContainer = styled.section`
    min-height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    position: relative;
    @media screen and (min-width: 768px) {
        min-height: calc(100vh - 90px);
    }
    @media screen and (min-width: 1024px) {
        justify-content: start;
        align-items: center;
    }
    @media screen and (min-width: 1600px) {
        min-height: calc(100vh - 120px);
    }
`;

export const Seperator = styled.div`
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${Colours.LightGrey};
`;

export const UseableContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
`;

export const Content = styled.div`
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 1em;
    @media screen and (min-width: 768px) {
        text-align: left;
        padding-bottom: 0em;
    }
    @media screen and (min-width: 1024px) {
        width: 50vw;
        max-width: 600px;
    }
    @media screen and (min-width: 1440px) {
        max-width: 700px;
    }
    @media screen and (min-width: 1920px) {
        width: 40vw;
        max-width: none;
    }
`;

export const ContentArrow = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
`;
export const ContentText = styled.p`
    margin: 2em 0;
    color: #bbb;
    font-size: clamp(14px, 3.5vw, 1rem);
    line-height: 1.4;
    font-weight: 400;
    @media screen and (min-width: 768px) {
        line-height: 1.6;
    }
    @media screen and (min-width: 1024px) {
        line-height: 2;
        font-size: clamp(1rem, 1vw, 2rem);
    }
`;

export const MainText = styled.h1`
    font-size: clamp(1rem, 7.5vw, 20rem);
    text-transform: none;
    font-weight: 600;
    @media screen and (min-width: 1024px) {
        font-size: clamp(3rem, 5.5vw, 5.5rem);
    }
`;
export const SecondaryText = styled.h1`
    font-size: clamp(1rem, 7.1vw, 3.3rem);
    text-transform: none;
    font-weight: 600;
    &:first-child {
        margin-top: 0.4em;
        margin-bottom: 0.6em;
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 1024px) {
        font-size: clamp(3rem, 4vw, 10rem);
    }
`;
