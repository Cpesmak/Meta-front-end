import { updateTimes } from "../path-to-your-functions"; // Replace with the correct path
import { fetchAPI } from "../path-to-api"; // Replace with the correct path

jest.mock("../path-to-api"); // Mock the fetchAPI function

test("updateTimes calls fetchAPI with the correct date and dispatches the result", async () => {
  const mockDispatch = jest.fn(); // Mock dispatch function
  const testDate = "2025-01-01";

  // Mock fetchAPI to return a specific array
  fetchAPI.mockResolvedValue(["17:00", "18:00", "19:00"]);

  await updateTimes(testDate, mockDispatch);

  // Assert that fetchAPI was called with the correct date
  expect(fetchAPI).toHaveBeenCalledWith(testDate);

  // Assert that dispatch was called with the correct action
  expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", payload: ["17:00", "18:00", "19:00"] });
});