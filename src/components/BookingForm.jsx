import React, { useState } from "react";

export default function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [selectedDate, setSelectedDate] = useState(""); // Combined state for date
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Handle date change and update available times
  const handleDateChange = (e) => {
    const newDate = e.target.value; // Correctly define newDate
    setSelectedDate(newDate); // Set the selected date
    updateTimes(newDate); // Dispatch the date change to update available times
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value); // Set the selected time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: selectedDate, time: selectedTime, guests, occasion };
    submitForm(formData); // Call the submitForm function with the form data
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
      {/* Date field */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
        required
      />

      {/* Time field */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={selectedTime}
        onChange={handleTimeChange}
        required
      >
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option>No available times</option>
        )}
      </select>

      {/* Number of guests field */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />

      {/* Occasion field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Submit button */}
      <button type="submit">Submit Reservation</button>
    </form>
  );
}