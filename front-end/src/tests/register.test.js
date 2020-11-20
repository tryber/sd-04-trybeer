import React from "react";
import renderWithRouter from "./helpers/renderWithRouter";
import RegisterForm from "../components/forms/RegisterForm";
import { fireEvent } from "@testing-library/react";
import * as API from "../services/TrybeerApi";

jest.mock("../services/TrybeerApi.js");

const resolveRegister = Promise.resolve()

API.postLogin = jest.fn(() => resolveLogin);

const mocks = {
  user: {
    email: "trybe@trybe.com.br",
    name: "Trybeer",
    role: "client",
  },
};

function getAllTestId() {
  const { queryByTestId } = renderWithRouter(<RegisterForm />);
  const inputEmail = queryByTestId("signup-email");
  const inputName = queryByTestId("signup-name");
  const inputPassword = queryByTestId("signup-password");
  const radioSeller = queryByTestId("signup-seller");
  const btn = queryByTestId("signup-btn");
  return { inputEmail, inputName, inputPassword, radioSeller, btn };
}

describe("Register Page", () => {
  it("Renderiza HTML", () => {
    const {
      inputEmail,
      inputName,
      inputPassword,
      radioSeller,
      btn,
    } = getAllTestId();

    expect(btn.disabled).toBeTruthy();

    expect(inputName).toBeInTheDocument();
    expect(inputName.value).toBe("");
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword.value).toBe("");
    expect(radioSeller).toBeInTheDocument()
  });

  it("inputs e button", () => {
    const {
      inputEmail,
      inputName,
      inputPassword,
      radioSeller,
      btn,
    } = getAllTestId();

    fireEvent.change(inputName, { target: { value: mocks.user.name } });
    fireEvent.change(inputEmail, { target: { value: mocks.user.email } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.change(radioSeller, { target: { checked: true } });
    expect(inputName.value).toBe(mocks.user.name);
    expect(inputEmail.value).toBe(mocks.user.email);
    expect(inputPassword.value).toBe('123456');
    expect(inputName.value).toBe(mocks.user.name);
    expect(radioSeller.checked).toBeTruthy();
    
    expect(btn.disabled).toBeFalsy();
  });
});
