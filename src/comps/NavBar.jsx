import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
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
        const { Light } = this.props;

        let Button = (
            <RoundedButton>
                <ButtonLink>Contact</ButtonLink>
            </RoundedButton>
        );

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
                        <NavLink style={{ marginRight: '30px' }}>About</NavLink>
                        {Light ? (
                            <NavLink style={{ marginRight: '30px' }}>
                                Services
                            </NavLink>
                        ) : (
                            <NavLink>Services</NavLink>
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
