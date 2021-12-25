import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    margin: clamp(40px, 2vw, 50px) clamp(40px, 4vw, 80px);
    @media screen and (min-width: 1024px) {
    }
    transition: all 250ms ease-in-out;
`;

export const Text = styled.h2`
    font-family: 'Montserrat';
    font-weight: 500;
    margin-left: 20px;
    color: white;
    font-size: 12px;
`;
