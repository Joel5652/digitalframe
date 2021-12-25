import React from 'react';
import { Container } from '../styles/HoverArrowStyles';

const HoverArrow = ({ style, size, color, degree }) => {
    return (
        <Container style={style} size={size} color={color} degree={degree} />
    );
};

export default HoverArrow;
