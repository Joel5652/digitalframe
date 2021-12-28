import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    margin: clamp(40px, 2vw, 50px) clamp(40px, 4vw, 80px);
    transition: all 250ms ease-in-out;
`;
