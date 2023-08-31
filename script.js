const formInput = document.querySelector("input");
const formOutput = document.querySelector("output");
const btn = document.querySelector("button");
const selector = document.querySelector("select");
btn.addEventListener("click", init);

function init() {
  console.log(formInput.value);

  if ((selector.value == "func1") | (selector.value == "func2") | (selector.value == "func3") | (selector.value == "func4")) {
    isName();
  } else if (selector.value == "func5") {
    isFileName();
  } else if (selector.value == "func6") {
    isPassword();
  } else if ((selector.value == "func7") | (selector.value == "func8")) {
    isAny();
  } else {
    console.log("couldn't read function");
  }

  function isName() {
    /* definitioner */
    let fullNameArr = formInput.value.split(" ");

    let fullNameObj = {
      firstName: fullNameArr[0],
      middleName: fullNameArr.slice(1, fullNameArr.length - 1),
      lastName: fullNameArr[fullNameArr.length - 1],
    };
    /* definitioner */
    if (selector.value == "func1") {
      formOutput.textContent = func1();
    } else if (selector.value == "func2") {
      formOutput.textContent = func2();
    } else if (selector.value == "func3") {
      formOutput.textContent = func3();
    } else if (selector.value == "func4") {
      formOutput.textContent = func4();
    }

    function func1() {
      /* If input is a first name: Make the first character in a name uppercase, and the rest lowercase */
      return fullNameObj.firstName.substring(0, 1).toUpperCase() + fullNameObj.firstName.substring(1, fullNameObj.firstName.length).toLowerCase();
    }
    function func2() {
      /* If input is a full name: Find the first name */
      return fullNameObj.firstName;
    }
    function func3() {
      /* If input is a full name: Find the length of the first name */
      return fullNameObj.firstName.length;
    }
    function func4() {
      /* If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string */
      return `the middle name is "${fullNameObj.middleName.join(" ")}" and starts at letter number ${fullNameArr.join(" ").indexOf(fullNameObj.middleName[0])} and ends at letter number ${
        fullNameArr.join(" ").indexOf(fullNameObj.middleName[0]) + fullNameObj.middleName.join(" ").length
      }`;
    }
  }
  function isFileName() {
    if (selector.value == "func5") {
      formOutput.textContent = func5();
    }
    function func5() {
      /* If input is a filename: Check if a filename is .png or .jpg */
      const filename = formInput.value;
      if (filename.includes(".jpg")) {
        return 'filename contains "jpg"';
      } else if (filename.includes(".png")) {
        return 'filename contains "png"';
      } else {
        return 'filename does not contains "jpg" og "png"';
      }
    }
  }
  function isPassword() {
    if (selector.value == "func6") {
      formOutput.textContent = func6();
    }
    function func6() {
      /* If input is a password: Hide a password with the correct number of *s */
      let password = formInput.value;
      console.log(password.length);
      return "*".repeat(password.length);
    }
  }
  function isAny() {
    if (selector.value == "func7") {
      formOutput.textContent = func7();
    } else if (selector.value == "func8") {
      formOutput.textContent = func8();
    }
    function func7() {
      /* With any input: Make the third character uppercase */
      return formInput.value.substring(0, 2) + formInput.value[2].toUpperCase() + formInput.value.substring(3, formInput.value.length);
    }
    function func8() {
      /* With any input: Make a character uppercase, if it follows a space or a hyphen */
      let splitString = [];
      formInput.value.split(" ").forEach((word) => {
        if (word.includes("-")) {
          let splitWord = [];
          word.split("-").forEach((item) => {
            splitWord.push(item.substring(0, 1).toUpperCase() + item.substring(1, item.length));
            console.log(splitWord.join("-"));
          });
          splitString.push(splitWord.join("-"));
        } else {
          word = word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
          splitString.push(word);
        }
      });
      return splitString.join(" ");
    }
  }
}
