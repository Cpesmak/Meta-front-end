import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Booking from "./pages/booking/Booking";
import Order from "./pages/Order";
import Login from "./pages/auth/Login";
import ConfirmedBooking from "./pages/booking/ConfirmedBooking";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;