import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

test("renders learn react link", () => {
  render(<RouterProvider router={[{}]} />);
  const route = screen.getByRole("RouterProvider");
  console.log(route);
  expect(route).toBeInTheDocument();
});
