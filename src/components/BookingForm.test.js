import { initializeTimes } from "../path-to-your-functions"; // Replace with the correct path
import { fetchAPI } from "../path-to-api"; // Replace with the correct path

jest.mock("../path-to-api"); // Mock the fetchAPI function

test("initializeTimes calls fetchAPI and returns available times", () => {
  // Mock fetchAPI to return a non-empty array
  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

  const result = initializeTimes();

  // Assert that fetchAPI was called once
  expect(fetchAPI).toHaveBeenCalledTimes(1);

  // Assert that initializeTimes returns the mocked available times
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});