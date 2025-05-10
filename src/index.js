import "./style.css";
import {
  fullNameInput,
  emailInput,
  postalCodeInput,
  passwordInput,
  repeatPasswordInput,
  submitButton,
} from "./gui";
import { validateAccountCreationForm } from "./validation";

fullNameInput.addEventListener("input", () => {
  validateAccountCreationForm();
});
emailInput.addEventListener("input", () => {
  validateAccountCreationForm();
});
postalCodeInput.addEventListener("input", () => {
  validateAccountCreationForm();
})

passwordInput.addEventListener("input", () => {
  validateAccountCreationForm();
});

repeatPasswordInput.addEventListener("input", () => {
  validateAccountCreationForm();
});

submitButton.addEventListener("click", (event) => {
  if(validateAccountCreationForm() === 'invalid'){
    event.preventDefault();
  }
})