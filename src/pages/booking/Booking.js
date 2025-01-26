import { fetchAPI, submitAPI } from '../../services/api';
import { useNavigate } from "react-router-dom";
import React, { useReducer, useEffect } from "react";
import BookingForm from "../../components/forms/BookingForm";

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE") {
    const { selectedDate } = action.payload;
    return fetchAPI(new Date(selectedDate));
  }
  return state;
}

function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmed-booking"); // Redirect to the confirmation page
    } else {
      alert("Failed to confirm booking. Please try again."); // Handle failure case
    }
  };

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE", payload: { selectedDate: today.toISOString().split('T')[0] } });
  }, []);

  return (
    <section className="booking">
      <h1>Little Lemon Reservations</h1>
      <p>Select your preferred time and date for your reservation. We're looking forward to hosting you!</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default Booking;