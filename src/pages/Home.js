import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const Home = () => {
    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
};

export default Home;
