import React, { Component } from 'react';
import BackgroundSVG from '../comps/SVGs/BackgroundSVG';
import NavBar from '../comps/NavBar';
import ScrollDown from '../comps/ScrollDown';
import TextArrow from '../comps/TextArrow';
import PCTest2 from '../comps/SVGs/PCTest2';
import Card from '../comps/Card';
import PhoneSVG from '../comps/SVGs/PhoneSVG';
import HouseSVG from '../comps/SVGs/HouseSVG';
import RepairSVG from '../comps/SVGs/RepairSVG';
import {
    MainText,
    FirstContainer,
    UseableContainer,
    MainTextContainer,
    SmallText,
    Content,
    ContentArrow,
    ContentText,
    SecondaryText,
    Seperator,
} from './styles/HomeScreenStyles';
import { appendScript } from '../functions/AppendScript';
import Mail from '../img/Mail.png';
import Instagram from '../img/Instagram.png';
import Twitter from '../img/Twitter.png';

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
                        <MainText>JaCKFyN</MainText>
                        <TextArrow />
                        <div className='console-container'>
                            <SmallText id='text'></SmallText>
                            <div className='console-underscore' id='console'>
                                _
                            </div>
                        </div>
                    </MainTextContainer>

                    <img
                        src={Mail}
                        alt='Mail'
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            left: 150,
                            height: 40,
                        }}
                    />
                    <img
                        src={Instagram}
                        alt='Instagram'
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            left: 235,
                            height: 40,
                        }}
                    />
                    <img
                        src={Twitter}
                        alt='Twitter'
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            left: 300,
                            height: 45,
                        }}
                    />

                    <ScrollDown
                        href='#section2'
                        Styles={{ left: 0, bottom: 0 }}
                    />
                    <BackgroundSVG id='BackgroundSVG' />
                </FirstContainer>
                <UseableContainer id='section2'>
                    {/* <PCTest2 className='pc1' /> */}
                    <Card
                        icon={<HouseSVG Style={{ width: 200 }} />}
                        colour='#47ac35'
                        name='Home built computers'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fringilla nisi velit auctor libero. Donec neque dolor, rhoncus sed posuere ut, ultricies ac arcu. Etiam eget bibendum ipsum.'
                    />
                    <Card
                        icon={<PhoneSVG Style={{ width: 200 }} />}
                        name='Excellent communication'
                        colour='#9cd6e6'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fringilla nisi velit auctor libero. Donec neque dolor, rhoncus sed posuere ut, ultricies ac arcu. Etiam eget bibendum ipsum.'
                    />
                    <Card
                        icon={<RepairSVG Style={{ width: 200 }} />}
                        colour='#989899'
                        name='Repair services'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fringilla nisi velit auctor libero. Donec neque dolor, rhoncus sed posuere ut, ultricies ac arcu. Etiam eget bibendum ipsum.'
                    />
                </UseableContainer>
            </>
        );
    }
}

export default HomeScreen;
