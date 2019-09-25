document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  document.querySelector("#login").addEventListener("click", logInOnClick);
});

function signUpOnClick() {}

function logInOnClick() {
  let emailInput = document.querySelector("#username").value;
  let passwordInput = document.querySelector("#password").value;
  console.log(`email: ${emailInput} password: ${passwordInput}`);
  let loging_token = logIn("venom@superhero.com", "venom");
  console.log(loging_token);
  if (loging_token !== undefined || loging_token !== "") {
    document.querySelector("#form").innerHTML = " ";
    let index = emailInput.indexOf("@");
    let profileName = emailInput.slice(0, index);
    let linkToProfile = document.createElement("a");
    linkToProfile.innerHTML = profileName;
    linkToProfile.href = "#";
    document.querySelector("#header").appendChild(linkToProfile);
    console.log(linkToProfile);
  }
  return { token: loging_token };
}

function listPosts() {
  // also function as searchPost
}
