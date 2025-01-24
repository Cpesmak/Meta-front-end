import { submitAPI } from '../api';
import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'date') {
    dispatch({ type: "UPDATE", payload: {selectedDate: value} });
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.time) errors.time = "Time is required.";
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) errors.guests = "Please select between 1 and 10 guests.";
    if (!formData.occasion) errors.occasion = "Occasion is optional but please select one if applicable.";

    setErrors(errors);
    return Object.keys(errors).length === 0; // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      console.log('Reservation submitted successfully:', formData);
    } else {
      console.error('Failed to submit reservation:');
    }
    submitForm(formData);
    setFormData({
      date: '',
      time: '',
      guests: '1',
      occasion: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().split('T')[0]}
        required
      />
      {errors.date && <span>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.time && <span>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />
      {errors.guests && <span>{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <span>{errors.occasion}</span>}


      <button type="submit" aria-label="On Click" disabled={!formData.date || !formData.time || !formData.guests}>Submit Reservation</button>
    </form>
  );
}

export default BookingForm;