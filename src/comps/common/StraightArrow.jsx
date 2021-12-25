import React from 'react';
import { Container } from '../styles/StraightArrowStyles';

const StraightArrow = ({ style, size, color, degree }) => {
    return (
        <Container style={style} size={size} color={color} degree={degree} />
    );
};

export default StraightArrow;
