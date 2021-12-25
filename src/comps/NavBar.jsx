import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import Colours from './Colours';
import {
    NavBarDiv,
    Heading,
    NavLink,
    DesktopMenu,
    RoundedButton,
    ButtonLink,
    DropDown,
    DropDownLink,
    DropDownContainer,
} from './styles/NavStyles';

class NavBar extends Component {
    state = {
        isOpen: false,
    };

    handleOpen = state => {
        state = !state;

        this.setState({ isOpen: state });
    };

    render() {
        let Button;
        let Theme;

        const { Light } = this.props;

        if (Light) {
            Theme = {
                Colour: `${Colours.Light}`,
            };
            // Button = Theme.Img;
        } else {
            Button = (
                <RoundedButton>
                    <ButtonLink>Contact</ButtonLink>
                </RoundedButton>
            );
        }

        return (
            <>
                <DropDown open={this.state.isOpen}>
                    <DropDownContainer Light={Light}>
                        <DropDownLink>Home</DropDownLink>
                        <DropDownLink>Shop</DropDownLink>
                        <DropDownLink>Contact</DropDownLink>
                    </DropDownContainer>
                    <div className='DropDownHide hidden' />
                </DropDown>
                <NavBarDiv Light={Light}>
                    <Heading>DigitalFrame</Heading>
                    {/* Mobile Menu - max 1024px */}
                    <BurgerMenu
                        Light={Light}
                        id='BurgerMenu'
                        handleOpen={() => this.handleOpen(this.state.isOpen)}
                        isOpen={this.state.isOpen}
                    />
                    {/* Desktop Menu - min 1024px */}
                    <DesktopMenu>
                        <NavLink style={{ marginRight: '30px' }}>Home</NavLink>
                        {Light ? (
                            <NavLink style={{ marginRight: '30px' }}>
                                Shop
                            </NavLink>
                        ) : (
                            <NavLink>Shop</NavLink>
                        )}
                        {Light && <NavLink>Contact</NavLink>}
                    </DesktopMenu>
                    {/*Desktop Button - min 1024px */}
                    {Button}
                </NavBarDiv>
            </>
        );
    }
}

export default NavBar;
