

import { initializeTimes, updateTimes } from "../pages/booking/Booking";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Retain the actual implementations of other exports
  useNavigate: jest.fn(), // Mock useNavigate
}));

test("initializeTimes returns the correct initial times", () => {
  // Define the expected initial times
  const expectedTimes = ["19:00", "20:00", "21:00"];

  // Call the function
  const result = initializeTimes();

  // Assert the result matches the expected times
  expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the same state when no logic is applied", () => {
  // Mock the initial state and action
  const initialState = ["19:00", "20:00", "21:00"];
  const action = { type: "UPDATE_TIMES", payload: "2025-01-26" };

  // Call the function
  const result = updateTimes(initialState, action);

  // Assert that the result matches the initial state
  expect(result).toEqual(initialState);
});
