import React from 'react';
import { Container, Text } from './styles/DropDownStyles';
import HoverArrow from './HoverArrow';
function DropDown({ Styles, Name, Array }) {
    return (
        <Container style={Styles}>
            <Text>{Name}</Text>
            <HoverArrow size={12} degree={'135deg'} />
        </Container>
    );
}

export default DropDown;
