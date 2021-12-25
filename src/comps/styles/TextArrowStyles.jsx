import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    border-bottom: solid rgb(187, 187, 187, 15%) 2px;
    padding-right: 5px;
    padding-bottom: 0.3em;
    font-size: clamp(12px, 2.4vw, 1rem);
    @media screen and (min-width: 1024px) {
        font-size: clamp(1rem, 2.4vw, 1.4rem);
    }
    margin-top: 1.5em;
`;

export const Text = styled.h2`
    color: #c7c7c7;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-right: 2em;
`;
