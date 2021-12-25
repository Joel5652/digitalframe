import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Container, Text } from './styles/TextArrowStyles';
import StraightArrow from './common/StraightArrow';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function TextArrow({ Styles }) {
    let Size;
    let Window = useWindowSize();
    if (Window < 400) {
        Size = 8;
    } else if (Window > 1440) {
        Size = 18;
    } else {
        Size = 10;
    }
    return (
        <Container style={Styles}>
            <Text>Explore our products</Text>
            <StraightArrow color={'#fff'} degree={'45deg'} size={Size} />
        </Container>
    );
}

export default TextArrow;
