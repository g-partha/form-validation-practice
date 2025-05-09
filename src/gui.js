import { Validation } from "./validation";

const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const postalCodeInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const submitButton = document.querySelector("#submit-button");

function validateForm() {
  const fullNameInputValidation = new Validation(
    fullNameInput,
    true,
    false,
    null,
    null,
    null,
    null,
    null,
  );
  fullNameInputValidation.validate();
  const passwordInputValidation = new Validation(
    passwordInput,
    true,
    true,
    8,
    16,
    null,
    null,
    null,
  );
  passwordInputValidation.validate();
  const repeatPasswordInputValidation = new Validation(
    repeatPasswordInput,
    true,
    false,
    null,
    null,
    null,
    passwordInput.value,
    null,
  );
  repeatPasswordInputValidation.validate();
}
fullNameInput.addEventListener("input", () => {
  validateForm();
});

passwordInput.addEventListener("input", () => {
  validateForm();
});

repeatPasswordInput.addEventListener("input", () => {
  validateForm();
});
