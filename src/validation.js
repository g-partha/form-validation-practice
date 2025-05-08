class Validation {
  constructor(
    input,
    isRequired,
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
  checkPassword() {
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
    if (this.isPassword) {
      const symbolCheck = (function () {
        symbols.forEach((item) => {
          if (this.input.value.includes(item)) {
            return "valid";
          }
        });
        return "invalid";
      })();
      const smallLettersCheck = (function () {
        smallLetters.forEach((item) => {
          if (this.input.value.includes(item)) {
            return "valid";
          }
        });
        return "invalid";
      })();
      const capitalLettersCheck = (function () {
        capitalLetters.forEach((item) => {
          if (this.input.value.includes(item)) {
            return "valid";
          }
        });
        return "invalid";
      })();
      const digitsCheck = (function () {
        digits.forEach((item) => {
          if (this.input.value.includes(item)) {
            return "valid";
          }
        });
        return "invalid";
      })();
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
}
