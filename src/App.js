import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage'; // Placeholder component for the Home page
import AboutPage from './pages/AboutPage'; // Placeholder component for the About page
import MenuPage from './pages/MenuPage'; // Placeholder component for the Menu page
import ReservationsPage from './pages/ReservationsPage'; // Placeholder component for Reservations
import OrderPage from './pages/OrderPage'; // Placeholder component for Online Order
import LoginPage from './pages/LoginPage'; // Placeholder component for Login

function App() {
    return (
        <Router>
            {/* Navigation bar is displayed on all pages */}
            <Header />

            {/* Define the routes for the different pages */}
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
