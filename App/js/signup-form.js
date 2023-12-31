import { sideContent } from "./utils/sideIllustration.mjs";

// get the index of selected tab
const index = JSON.parse(localStorage.getItem("index"));

addSideIllustration();

function addSideIllustration() {
  // get reference to title element

  // assign color, h2, h4, and image content to side illustration
  const title = document.querySelector(".signup__title");

  const sideIllContainer = document.querySelector(".side-ill-container");
  const signupLogo = document.querySelector(".signup__logo");
  const h2Content = document.querySelector(".h2-content");
  const h4Content = document.querySelector(".h4-content");
  const imgContent = document.querySelector(".img-content");

  const ill = sideContent[index];

  // add title
  title.textContent = ill.title;

  sideIllContainer.style.backgroundColor = ill.bgColor;
  signupLogo.style.color = ill.color;

  h2Content.innerHTML = ill.h2Content;
  h2Content.style.color = ill.color;
  h4Content.innerHTML = ill.h4Content;
  h4Content.style.color = ill.color;
  imgContent.src = ill.imgContent;
}

// check selected option from dropdown items
const optionsList = document.querySelectorAll(".dropdown-menu li");

optionsList.forEach((option) => {
  function handler(e) {
    checkSelectedOption();
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

function checkSelectedOption() {
  const selected = document.querySelector(".selected-value").textContent.trim();
  const explainField = document.querySelector(".field-explain");
  const sourceField = document.querySelector(".field-source");

  // display Others input field
  if (selected === "Other") {
    explainField.setAttribute("is-visible", "true");
  } else {
    explainField.setAttribute("is-visible", "false");
  }

  // display source select field
  if (selected === "Referred/Recommended") {
    sourceField.setAttribute("is-visible", "true");
  } else {
    sourceField.setAttribute("is-visible", "false");
  }
}
