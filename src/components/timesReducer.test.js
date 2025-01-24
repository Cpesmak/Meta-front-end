import { initializeTimes, updateTimes } from "../pages/Booking";
import { fetchAPI } from '../api'; // Import the fetchAPI function
// Mock fetchAPI
jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should fetch available times and return them', async () => {
    // Arrange: Set up the mock return value
    const mockTimes = ['18:00', '19:00', '20:00'];
    fetchAPI.mockResolvedValueOnce(mockTimes);

    // Act: Call the initializeTimes function
    const result = await initializeTimes();

    // Assert: Check that fetchAPI was called and the result is as expected
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date()); // It uses the current date
    expect(result).toEqual(mockTimes); // Ensure the result is the mock times
  });
});

describe('updateTimes', () => {
  it('should update available times when the selected date changes', async () => {
    // Arrange: Set up the mock return value
    const mockTimes = ['18:00', '19:00', '20:00'];
    const selectedDate = '2025-01-30';
    fetchAPI.mockResolvedValueOnce(mockTimes);

    // Act: Dispatch the update action with a new date
    const result = await updateTimes([], { type: 'UPDATE', payload: { selectedDate } });

    // Assert: Check that fetchAPI was called with the selected date and times were updated
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate)); // Check if it uses the selected date
    expect(result).toEqual(mockTimes); // Ensure the result is the mock times
  });
});