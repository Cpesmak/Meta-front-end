import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from "react-router-dom";
import React, { useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";

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
    <div>
      <h1>Little Lemon Reservations</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Booking;