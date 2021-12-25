import React, { Component } from 'react';
import styled from 'styled-components';
import Colours from './Colours';

const BurgerNav = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
    margin-left: auto;
    transition: all 500ms ease;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    &:hover {
        transform: scale(0.9);
    }
`;

class BurgerMenu extends Component {
    render() {
        const { handleOpen, isOpen, id, Light } = this.props;
        let Colour;
        Light ? (Colour = Colours.Dark) : (Colour = Colours.Light);

        const styles = {
            top: {
                display: 'block',
                height: '3px',
                width: '38px',
                backgroundColor: Colour,
                marginBottom: '8px',
            },
            middle: {
                display: 'block',
                height: '3px',
                width: '25.33px',
                backgroundColor: Colour,
            },
            bottom: {
                marginTop: '8px',
                display: 'block',
                height: '3px',
                width: '12.66px',
                backgroundColor: Colour,
            },
            transition: {
                transition: 'all 250ms linear',
            },
        };

        const Open = {
            top: {
                position: 'relative',
                top: '0px',
                display: 'block',
                height: '3px',
                width: '30px',
                backgroundColor: Colour,
                transform: 'rotate(-45deg)',
            },
            middle: {
                opacity: '0',
            },
            bottom: {
                position: 'relative',
                bottom: '4px',
                transform: 'rotate(45deg)',
                display: 'block',
                height: '3px',
                width: '30px',
                backgroundColor: Colour,
            },
            container: {
                transform: 'rotate(180deg)',
            },
        };

        let top, middle, bottom, container;

        if (isOpen === false) {
            top = styles.top;
            middle = styles.middle;
            bottom = styles.bottom;
        } else {
            top = Open.top;
            middle = Open.middle;
            bottom = Open.bottom;
            container = Open.container;
        }

        return (
            <BurgerNav
                id={id}
                isOpen={isOpen}
                onClick={handleOpen}
                style={container}
            >
                <span style={{ ...top, ...styles.transition }} />
                <span style={{ ...middle, ...styles.transition }} />
                <span style={{ ...bottom, ...styles.transition }} />
            </BurgerNav>
        );
    }
}

export default BurgerMenu;
