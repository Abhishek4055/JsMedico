import { render, screen } from "@testing-library/react";
import About from "../pages/About";
test("renders the section with buttons and timer", () => {
  // Mocking the component with the provided structure
  render(<About />);

  // Check if the timer is rendered correctly
  const timerElement = screen.getByText("01 : 30");
  expect(timerElement).toBeInTheDocument(); // Checks if the timer exists

  // Check if the Reset button exists and has the correct class
  const resetButton = screen.getAllByRole("button");
  expect(resetButton.length).toBe(3); // Checks if the Reset button is in the DOM
  //   expect(resetButton.length).toHaveClass("secondery-btn"); // Checks for the class 'secondery-btn'

  //   // Check if the Stop button exists and has the correct class
  //   const stopButton = screen.getByText("Stop");
  //   expect(stopButton).toBeInTheDocument(); // Checks if the Stop button is in the DOM
  //   expect(stopButton).toHaveClass("primery-btn"); // Checks for the class 'primery-btn'

  //   // Check if the Start button is disabled and has the correct class
  //   const startButton = screen.getByText("Start");
  //   expect(startButton).toBeInTheDocument(); // Checks if the Start button is in the DOM
  //   expect(startButton).toHaveClass("primery-btn disabled-btn"); // Checks for the class 'disabled-btn'
  //   expect(startButton).toBeDisabled(); // Checks if the button is disabled
});
