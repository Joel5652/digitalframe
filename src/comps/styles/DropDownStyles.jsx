import styled from 'styled-components';
import Colours from '../Colours';
export const Container = styled.div`
    font-size: clamp(0.8rem, 1vw, 1rem);
    color: ${Colours.Dark};
    display: flex;
    & > :first-child {
        margin-right: 1em;
    }
`;

export const Text = styled.h3`
    font-size: clamp(0.85rem, 1vw, 1rem);
    color: ${Colours.Dark};
    font-weight: 500;
`;
