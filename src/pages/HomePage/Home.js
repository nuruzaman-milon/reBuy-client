import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import InfoSection from './InfoSection/InfoSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <InfoSection></InfoSection>
        </div>
    );
};

export default Home;