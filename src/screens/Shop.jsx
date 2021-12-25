import React, { useState, useEffect } from 'react';
import NavBar from '../comps/NavBar';
import ProductView from '../comps/ProductView';
import DropDown from '../comps/common/DropDown';
import { Container, MainContainer, TopContainer } from './styles/ShopStyles';
import { Text } from '../comps/styles/DropDownStyles';

function Shop(props) {
    const objects = [
        {
            Name: 'Gaming PC kit',
            Price: 800,
            Featured: true,
        },
        {
            Name: 'Office PC kit',
            Price: 900,
            Featured: false,
        },
        {
            Name: 'Name3',
            Price: 1000,
            Featured: false,
        },
        {
            Name: 'Name4',
            Price: 500,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 6008,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 6007,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 6002,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 6050,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 6004,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 603,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 602,
            Featured: false,
        },
        {
            Name: 'Name5',
            Price: 601,
            Featured: false,
        },
    ];

    const [newObjects, sortObjects] = useState(objects);
    const [SortBy, setSortBy] = useState('High');
    const [Reload, setReload] = useState(false);

    const SortObjects = (list, sort) => {
        let NumOne, NumTwo;
        if (sort === 'High') {
            NumOne = -1;
            NumTwo = 1;
        } else {
            NumOne = 1;
            NumTwo = -1;
        }

        list.sort((a, b) => (a.Price > b.Price ? NumOne : NumTwo));
        sortObjects(list);
    };

    useEffect(() => SortObjects(newObjects, SortBy), [Reload]);

    return (
        <MainContainer>
            <NavBar Light />
            <TopContainer onClick={() => setReload(!Reload)}>
                <DropDown Name='Category' />
                <Text
                    style={{
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    {newObjects.length} items
                </Text>
                <DropDown Name='Sort by' Styles={{ marginLeft: 'auto' }} />
            </TopContainer>
            <Container>
                {newObjects.map(obj => {
                    return (
                        <ProductView
                            Name={obj.Name}
                            Price={obj.Price}
                            Featured={obj.Featured}
                        />
                    );
                })}
            </Container>
        </MainContainer>
    );
}

export default Shop;
