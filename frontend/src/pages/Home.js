import React from 'react';
import Section from '../components/Section';
import LargeText from '../components/LargeText';
import '../sass/home.scss';

const Home = () => {
    return (
        <div className="container">
            <div className="left-side">
                <Section
                    title="Start chatting now"
                    paragraph="It’s never been easier to stay connected with your loved ones, choose your display name and you are ready to have the time of your life."
                    input="Enter your name"
                    button="Join a room"
                ></Section>
                <LargeText right="true" text="ster"></LargeText>
            </div>
            <div className="right-side">
                <LargeText text="Chat"></LargeText>
                <Section
                    title="Make your room"
                    paragraph="Be the first one to create an exciting group where you and your friends can share your lives from anywhere."
                    input="Enter your name"
                    button="Make a room"
                ></Section>
            </div>
        </div>
    );
};

export default Home;
