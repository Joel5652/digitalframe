import React from 'react';
import { Container, Desc, Title, Content } from './styles/cardStyles';

function Card({ name, colour, icon, url, description, Styles }) {
    return (
        <Container style={Styles} colour={colour}>
            <Content>{icon}</Content>
            <Content>
                <Title>{name}</Title>
                <Desc>{description}</Desc>
            </Content>
        </Container>
    );
}

export default Card;
