import React, { Component } from 'react';
import BackgroundSVG from '../comps/BackgroundSVG';
import NavBar from '../comps/NavBar';
import ScrollDown from '../comps/ScrollDown';
import TextArrow from '../comps/TextArrow';
import {
    MainText,
    FirstContainer,
    UseableContainer,
    MainTextContainer,
    SmallText,
    Content,
    ContentArrow,
    ContentText,
    ContentImage,
} from './styles/HomeScreenStyles';
import { appendScript } from '../functions/AppendScript';

class HomeScreen extends Component {
    componentDidMount() {
        appendScript('HomeTextAnimation.js');
    }
    render() {
        return (
            <>
                <NavBar />
                <FirstContainer>
                    <MainTextContainer>
                        <MainText>
                            DIGITAL <br></br> FRAME
                        </MainText>
                        <TextArrow Styles={{ marginTop: 25 }} />
                        <div className='console-container'>
                            <SmallText id='text'></SmallText>
                            <div className='console-underscore' id='console'>
                                _
                            </div>
                        </div>
                    </MainTextContainer>

                    <ScrollDown
                        href='#section2'
                        Styles={{ left: 0, bottom: 0 }}
                    />
                    <BackgroundSVG id='BackgroundSVG' />
                </FirstContainer>

                <UseableContainer id='section2'>
                    <Content>
                        <MainText>The Product.</MainText>
                        <ContentText>
                            The computer building kits were designed to inovate
                            the current market of over priced pre-built
                            computers while providing hand picked, qaulity
                            products to suite the customers needs. The product
                            allows for customers to design and build their own
                            computer without having to spend hours doing
                            essential research into what system to buy or what
                            parts to pick.
                        </ContentText>
                        <ContentText>
                            With the simplification of the building process and
                            the detailed instructions provided, the computer
                            kits are a no-brainer in terms of saving money and
                            using your time efficienctly.
                        </ContentText>
                        <ContentArrow>
                            <TextArrow />
                        </ContentArrow>
                    </Content>
                    <ScrollDown Styles={{ left: 0, bottom: 0 }} />
                </UseableContainer>
                {/* <UseableContainer>
                    <ContentImage src='https://source.unsplash.com/random' />
                    <ScrollDown Styles={{ left: 0, bottom: 0 }} />
                </UseableContainer> */}
            </>
        );
    }
}

export default HomeScreen;
