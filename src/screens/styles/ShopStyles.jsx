import styled from 'styled-components';
import Colours from '../../comps/Colours';

export const MainContainer = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${Colours.Light};
`;

export const Container = styled.div`
    position: relative;
    color: ${Colours.Dark};
    margin: 0 auto;
    background: ${Colours.Light};
    width: 100%;
    max-width: 1920px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 600px) {
        padding: 0 12vw;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0 15vw;
    }
    padding: 0 8vw;
    gap: 1em;
`;

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1920px;
    margin: 0 auto;
    height: auto;
    position: relative;
    padding: 6vh 8vw 2.5em 8vw;
    @media (min-width: 600px) {
        padding: 8vh 12vw 2.5em 12vw;
    }
    @media (min-width: 1024px) {
        padding: 10vh 15vw 2.5em 15vw;
    }
`;
