import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const Home = () => {
    return (
        <>
            <h1>Welcome to Little Lemon</h1>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
};

export default Home;
