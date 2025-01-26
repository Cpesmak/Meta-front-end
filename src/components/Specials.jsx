import React from 'react';
import { Link } from "react-router-dom";
import bruschetta from '../assets/images/bruschetta.jpg';
import delivery from '../assets/icons/delivery.png';
import greekSalad from '../assets/images/greek-salad.jpg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';

const Specials = () => {
    return (
        <section class="special">
            <div className="specials-header">
                <h2>This Week's Specials!</h2>
                <Link to="/menu">
                    <button>Online Menu</button>
                </Link>
            </div>

            <div className="specials-grid">
                <div className="special-box">
                    <img src={greekSalad} alt="Greek salad" />
                    <div className="special-info">
                        <div className="title">
                          <h3>Greek salad</h3>
                          <h3 className="price">$12.99</h3>
                        </div>
                        <p>This is a short description of the dish, highlighting its ingredients and preparation.</p>
                        <div className="icon-text">
                            <h4>Order a delivery</h4>
                            <img src={delivery} alt="Delivery" />
                        </div>
                    </div>
                </div>
                <div className="special-box">
                    <img src={bruschetta} alt="Bruschetta" />
                    <div className="special-info">
                        <div className="title">
                          <h3>Bruschetta</h3>
                          <h3 className="price">$5.99</h3>
                        </div>
                        <p>A brief description of the dish and why it’s a must-try this week.</p>
                        <div className="icon-text">
                            <h4>Order a delivery</h4>
                            <img src={delivery} alt="Delivery" />
                        </div>
                    </div>
                </div>

                <div className="special-box">
                    <img src={lemonDessert} alt="Lemon Dessert" />
                    <div className="special-info">
                        <div className="title">
                          <h3>Lemon Dessert</h3>
                          <h3 className="price">$5.00</h3>
                        </div>
                        <p>Experience the rich flavours of this unique dish only available this week!</p>
                        <div className="icon-text">
                            <h4>Order a delivery</h4>
                            <img src={delivery} alt="Delivery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specials;
