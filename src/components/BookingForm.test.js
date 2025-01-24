import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm labels", () => {
  render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatch={jest.fn()} />);

  // Check that static text such as labels are rendered
  expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
  expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
  expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
  expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
});

test('should apply the correct validation attributes to form fields', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);

  // Date input should have min value as today
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]); // Today's date as min

  // Time select should have required attribute
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');

  // Guests input should have min and max values
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  // Occasion select should not be required
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).not.toHaveAttribute('required');
});