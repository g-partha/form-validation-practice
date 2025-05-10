import {
  fullNameInput,
  emailInput,
  postalCodeInput,
  passwordInput,
  repeatPasswordInput,
  submitButton,
} from "./gui";

class Validation {
  constructor(
    input,
    isRequired,
    isNumber,
    isPassword,
    minLength,
    maxLength,
    regex,
    string,
    array,
  ) {
    this.input = input;
    this.isRequired = isRequired;
    this.isPassword = isPassword;
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.regex = regex;
    this.string = string;
    this.array = array;
  }
  checkRequired() {
    if (this.isRequired) {
      if (!this.input.value) {
        return "invalid";
      }
      return "valid";
    }
  }
  checkNumber(){
    if(this.isNumber){
      if(typeof(this.input.value) !== 'number'){
        return 'invalid';
      }
    }
  }
  checkPassword() {
    if (this.isPassword) {
      const symbols = ["@", "#", "%", "&"];
      const smallLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const capitalLetters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let symbolCheck = "invalid";
      for (let symbol of symbols) {
        if (this.input.value.includes(symbol)) {
          symbolCheck = "valid";
        }
      }
      let smallLettersCheck = "invalid";
      for (let smallLetter of smallLetters) {
        if (this.input.value.includes(smallLetter)) {
          smallLettersCheck = "valid";
        }
      }
      let capitalLettersCheck = "invalid";
      for (let capitalLetter of capitalLetters) {
        if (this.input.value.includes(capitalLetter)) {
          capitalLettersCheck = "valid";
        }
      }
      let digitsCheck = "invalid";
      for (let digit of digits) {
        if (this.input.value.includes(digit)) {
          digitsCheck = "valid";
        }
      }
      if (
        symbolCheck === "invalid" ||
        smallLettersCheck === "invalid" ||
        capitalLettersCheck === "invalid" ||
        digitsCheck === "invalid"
      ) {
        return "invalid";
      }
      return "valid";
    }
  }
  checkMinLength() {
    if (this.minLength) {
      if (this.input.value.length < this.minLength) {
        return "invalid";
      }
      return "valid";
    }
  }
  checkMaxLength() {
    if (this.maxLength) {
      if (this.input.value.length > this.maxLength) {
        return "invalid";
      }
      return "valid";
    }
  }
  checkRegex() {
    if (this.regex) {
      if (this.regex.test(this.input.value)) {
        return "valid";
      }
      return "invalid";
    }
  }
  checkStringComparision() {
    if (this.string) {
      if (this.input.value === this.string) {
        return "valid";
      }
      return "invalid";
    }
  }
  checkArrayInclusion() {
    if (this.array) {
      if (this.array.includes(this.input.value)) {
        return "valid";
      }
      return "invalid";
    }
  }
  validate() {
    if (
      this.checkRequired() === "invalid" ||
      this.checkPassword() === "invalid" ||
      this.checkMinLength() === "invalid" ||
      this.checkMaxLength() === "invalid" ||
      this.checkRegex() === "invalid" ||
      this.checkStringComparision() === "invalid" ||
      this.checkArrayInclusion() === "invalid"
    ) {
      this.input.className = "";
      this.input.classList.add("invalid");
      return 'invalid';
    } else {
      this.input.className = "";
      this.input.classList.add("valid");
      return 'valid';
    }
  }
}

export function validateAccountCreationForm() {
  const fullNameInputValidation = new Validation(
    fullNameInput,
    true,
    false,
    false,
    null,
    null,
    null,
    null,
    null,
  );
  fullNameInputValidation.validate();
  const emailInputValidation = new Validation(
    emailInput,
    true,
    false,
    false,
    null,
    null,
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    null,
    null
  );
  emailInputValidation.validate();
  const postalCodeInputValidation = new Validation(
    postalCodeInput,
    true,
    true,
    false,
    6,
    6,
    null,
    null,
    null
  )
  postalCodeInputValidation.validate();
  const passwordInputValidation = new Validation(
    passwordInput,
    true,
    false,
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
    false,
    null,
    null,
    null,
    passwordInput.value,
    null,
  );
  repeatPasswordInputValidation.validate();

  if(
    fullNameInputValidation.validate() === 'invalid' ||
    emailInputValidation.validate() === 'invalid' ||
    postalCodeInputValidation.validate() === 'invalid' ||
    passwordInputValidation.validate() === 'invalid' ||
    repeatPasswordInputValidation.validate() === 'invalid'
  ){
    return 'invalid';
  }
}
