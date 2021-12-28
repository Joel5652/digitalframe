import styled from 'styled-components';
import Colours from '../Colours';

export const Container = styled.div`
    min-width: 100px;
    max-width: 400px;
    width: 40vw;
    height:550px;
    border-top: 8px solid ${props => props.colour};
    background-color: ${Colours.LightGrey};
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items:center;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    transition: all 500ms ease-in-out;
    z-index:2;
    overflow: hidden;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
       
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 50%;
    transition: all 500ms ease-in-out;
    &:first-child {
        padding: 2rem 0 0 0;
    }
    &:nth-child(2) {
        padding: 0 0 5rem 0;
    }
`;

export const Title = styled.h2`
    padding: 3rem 0rem 1rem 0rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${Colours.DarkGrey};
    font-size: 1.2rem;
`;

export const Desc = styled.p`
    font-weight: 600;
    font-size: 0.85rem;
    color: ${Colours.DarkGrey};
    opacity: 0.6;
`;
