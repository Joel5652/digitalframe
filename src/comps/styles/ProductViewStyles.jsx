import styled from 'styled-components';
import Colours from '../Colours';

export const MainContainer = styled.a`
    ${props => props.Featured && 'grid-column: 1/3'};
    @media (min-width: 500px) {
        ${props => props.Featured && 'grid-column: 1'};
    }
    @media (min-width: 768px) {
        ${props => props.Featured && 'grid-column: 1/3'};
        ${props => props.Featured && 'grid-row: 1/3'};
    }
    @media (min-width: 1024px) {
        ${props => props.Featured && 'grid-column: 1/2'};
        ${props => props.Featured && 'grid-row: 1/2'};
    }
`;
export const Container = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colours.LightGrey};
    position: relative;
    &:after {
        content: '';
        display: block;
        padding-bottom: 120%;
    }
`;

export const PriceText = styled.p`
    margin: 1.5em 0 1em 0;
    font-size: clamp(0.75rem, 1vw, 0.8rem);
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${Colours.DarkGrey};
`;

export const TitleText = styled.h3`
    margin-bottom: 1.5em;
    line-height: 1.8;
    font-size: clamp(0.75rem, 1vw, 0.9rem);
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${Colours.DarkGrey};
`;
