import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
import { screen} from "@testing-library/react";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText("First Name:");
    userEvent.type(firstName, "Optimus");

    const lastName = screen.getByLabelText("Last Name:");
    userEvent.type(lastName, "Prime");

    const address = screen.getByLabelText("Address:");
    userEvent.type(address, "47 Wallaby Lane");

    const city = screen.getByLabelText("City:");
    userEvent.type(city, "Cyberion");

    const state = screen.getByLabelText("State:");
    userEvent.type(state, "Cybertron");

    const zip = screen.getByLabelText("Zip:");
    userEvent.type(zip, "10101");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const success = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);
    expect(success).toBeInTheDocument()
});

