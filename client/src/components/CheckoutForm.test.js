import React from "react";
import { render, screen, getByRole } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText("Checkout Form")
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput, "test")
    userEvent.type(lastNameInput, "test")
    userEvent.type(addressInput, "test")
    userEvent.type(cityInput, "test")
    userEvent.type(stateInput, "test")
    userEvent.type(zipInput, "test")

    const button = screen.getByRole("button")
    userEvent.click(button)

    const successMessage = screen.getByTestId("successMessage")
    expect(successMessage).toBeInTheDocument();

    const successText = screen.getByText("test")
    expect(successText).toBeInTheDocument();
    
});
