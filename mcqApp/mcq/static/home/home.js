var option = false;
const userProfile = document.querySelector(".MCQ-userProfile");
var t = JSON.parse(document.getElementById("t-data").textContent);
console.log(t);
function optionFunction() {
  console.log(window.s);
  element = document.querySelector(".MCQ-userProfile__options");
  if (!option) {
    element.style.display = "block";
    option = true;
  } else {
    element.style.display = "none";
    option = false;
  }
}

userProfile.addEventListener("click", optionFunction);
console.log(userProfile);
