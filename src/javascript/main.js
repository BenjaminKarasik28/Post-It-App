document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  document.querySelector("#login").addEventListener("click", logInOnClick);
});

function signUpOnClick() {}

async function logInOnClick() {
  let emailInput = document.querySelector("#username").value;
  let passwordInput = document.querySelector("#password").value;
  console.log(`email: ${emailInput} password: ${passwordInput}`);
  let loging_result = await logIn(emailInput, passwordInput);
  console.log(loging_result);
  if (loging_result.token !== undefined && loging_result.token !== "") {
    document.querySelector("#form").innerHTML = " ";
    let index = emailInput.indexOf("@");
    let profileName = emailInput.slice(0, index);
    let linkToProfile = document.createElement("a");
    linkToProfile.innerHTML = profileName;
    linkToProfile.href = "#";
    document.querySelector("#header").appendChild(linkToProfile);
    console.log(linkToProfile);
  } else {
    alert("Login Error");
  }
  return { token: loging_token };
}

function listPosts() {
  // also function as searchPost
}
