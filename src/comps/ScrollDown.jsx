import React from 'react';
import HoverArrow from './common/HoverArrow';
import { Container } from './styles/ScrollDownStyles';

function ScrollDown({ href, Styles }) {
    return (
        <Container href={href} style={Styles}>
            <HoverArrow size={25} color={'#fff'} degree={'135deg'} />
        </Container>
    );
}

export default ScrollDown;
