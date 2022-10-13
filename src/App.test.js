import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("adds a ToDo: 'This is a new ToDo'", () => {
    render(<App />);

    const textareaElement = screen.getByPlaceholderText("Write something here");
    const buttonElement = screen.getByText("Add Item");
    userEvent.type(textareaElement, "This is a new ToDo");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("This is a new ToDo");
    expect(outputElement).toBeInTheDocument();
  });
});
