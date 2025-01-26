import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const Home = () => {
    return (
        <section className='home'>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </section>
    );
};

export default Home;
