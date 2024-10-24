let colorPicker = document.querySelector("#colorPicker");
let changeColorBtn = document.querySelector("#bgChange");
let randomColor = document.querySelector("#randomColor");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let logo = document.querySelector("#logo");
let logoSize = document.querySelector("#LogoSize");

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#loginBtn");
let iconEye = document.querySelector("#eye");

function randomColorGenerator() {
  let r = Math.random() * 255;
  let red = Math.floor(r);
  let g = Math.random() * 255;
  let green = Math.floor(g);
  let b = Math.random() * 255;
  let blue = Math.floor(b);

  let finalColor = `rgba(${red} , ${green} , ${blue})`;

  document.body.style.background = finalColor;
}

randomColor.addEventListener("click", randomColorGenerator);

changeColorBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let getColorValue = colorPicker.value;
  document.body.style.background = getColorValue;
});

let assignSize = logo.classList.add(`h-[${logoSize.value}px]`);

increment.addEventListener("click", (e) => {
  e.preventDefault;
  let changedSize = Number(logoSize.value);
  logoSize.value = changedSize + 1;
  let customLogoSize = logo.classList.contains(`h-[${logoSize.value - 1}px]`);
  console.log(customLogoSize);
  if (customLogoSize) {
    logo.classList.remove(`h-[${logoSize.value}px]`);
    // logo.classList.add(`h-[${changedSize}px]`);
  }
});

decrement.addEventListener("click", (e) => {
  e.preventDefault;
  let changedSize = Number(logoSize.value);
  logoSize.value = changedSize - 1;
});

function handleLogIn(e) {
  e.preventDefault();
  let userGivenEmail = email.value;
  let userGivenPassword = password.value;

  if (!userGivenEmail) {
    alert("Email Is Required");
  }

  if (!userGivenPassword) {
    alert("Password Is Required");
  }

  if (userGivenEmail && userGivenPassword) {
    alert("Login Successful");
  }

  console.log(userGivenEmail, userGivenPassword);
}

submitBtn.addEventListener("click", handleLogIn);

iconEye.addEventListener("click", (e) => {
  e.preventDefault();
  let checkIcon = iconEye.classList.contains("fa-eye-slash");

  if (checkIcon) {
    iconEye.classList.remove("fa-eye-slash");
    iconEye.classList.add("fa-eye");
    password.type = "text";
  } else {
    iconEye.classList.add("fa-eye-slash");
    iconEye.classList.remove("fa-eye");
    password.type = "password";
  }
});
