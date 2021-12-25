import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    box-sizing: border-box;
    transform: rotate(${props => props.degree});
    position: relative;
    cursor: pointer;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: ${props => props.size / 5}px ${props => props.size / 5}px
            0 0;
        border-style: solid;
        border-color: ${props => props.color};
        transition: 0.2s ease;
        display: block;
    }
    &::after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 100%;
        border-width: 0 ${props => props.size / 5}px 0 0;
        border-style: solid;
        border-color: ${props => props.color};
        transform-origin: 80% 3%;
        transition: 0.2s ease;
    }
    &:hover::after {
        transform: rotate(45deg);
        border-color: orange;
        height: 180%;
    }
    &:hover::before {
        border-color: orange;
        transform: scale(1);
    }
`;
