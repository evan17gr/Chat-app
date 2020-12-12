import React from 'react';
import Section from '../components/Section';
import LargeText from '../components/LargeText';

const Home = () => {
    return (
        <div className="container">
            <div className="left-side">
                <Section></Section>
                <LargeText></LargeText>
            </div>
            <div className="right-side">
                <LargeText></LargeText>
                <Section></Section>
            </div>
        </div>
    );
};

export default Home;
