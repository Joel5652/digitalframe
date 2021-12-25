import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    border-bottom: solid rgb(187, 187, 187, 15%) 2px;
    padding-right: 5px;
    padding-bottom: 0.3em;
`;

export const Text = styled.h2`
    color: #c7c7c7;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 1.4vw, 1.4rem);
    margin-right: 1.8em;
`;
