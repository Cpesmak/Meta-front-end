import React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantFood from '../assets/images/restaurantfood.jpg';

const CallToAction = () => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate('/booking'); // Assuming '/reserve' is the reservation page
    };

    return (
        <section className="call-to-action">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <img src={restaurantFood} alt="Restaurant food" />
            <button onClick={handleBookingClick}>Reserve a Table</button>
        </section>
    );
};

export default CallToAction;
