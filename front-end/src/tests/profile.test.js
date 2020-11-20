import React from "react";
import renderWithRouter from "./helpers/renderWithRouter";
import UserProfile from "../pages/UserProfile";
import AdminProfile from "../pages/AdminProfile";
import { fireEvent } from "@testing-library/react";


const mocks = {
  user: {
    email: "trybe@trybe.com.br",
    name: "Trybeer",
    role: "client",
  },
};

describe("Profile Page", () => {
  it("Renderiza HTML", () => {
    const { queryByTestId } = renderWithRouter(
      <UserProfile />,
    );
    const inputEmail = queryByTestId("profile-email-input");
    const inputName = queryByTestId("profile-name-input");
    const message = getByText(/Ainda não tenho conta/);
    const btn = getByRole("button");
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
