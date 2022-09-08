import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Niya text", () => {
  render(<App />);
  const textElement = screen.getByText(/Niya/i);
  expect(textElement).toBeInTheDocument();
});
