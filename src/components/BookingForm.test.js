import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm labels", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);

  // Check that static text such as labels are rendered
  expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
  expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
  expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
  expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
});
