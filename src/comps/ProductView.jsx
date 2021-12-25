import React from 'react';
import {
    Container,
    PriceText,
    MainContainer,
    TitleText,
} from './styles/ProductViewStyles';

function ProductView({ Name, Price, Image, style, Featured }) {
    return (
        <MainContainer Featured={Featured} style={style}>
            <Container>{Image ?? <img src={Image} alt='Image' />}</Container>
            <PriceText Featured={Featured}>£{Price}.00</PriceText>
            <TitleText Featured={Featured}>{Name}</TitleText>
        </MainContainer>
    );
}

export default ProductView;
