document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();

  let tokenAvailable = checkTokenAvailable();
  console.log(`token availability: ${tokenAvailable}`);
  if (tokenAvailable) {
    document.getElementById("form-to-login").style.display = "none";
    document.getElementById("err-row").style.display = "none";
    document.getElementById("form-logined").style.display = "block";
    document.getElementById("logined-username").innerText = localStorage.getItem("username");
  } else {
    document.getElementById("profile-form").style.display = "none";
    document.getElementById("form-to-login").style.display = "block";
    document.getElementById("form-logined").style.display = "none";
    document.getElementById("err-row").style.display = "block";
    document.getElementById("err-msg").innerText = "Please Log In";
    return;
  }
  getProfileOnLoaded();
  document.getElementById("profile-edit-button").addEventListener("click", createOrUpdateProfileOnClick);
});

async function getProfileOnLoaded() {
  //get profile
  await getProfile().then(profile => {
    console.log(profile);
    //update html
    document.getElementById("profile-username").innerText = profile.user.username;
    document.getElementById("profile-email").setAttribute("value", profile.additionalEmail);
    document.getElementById("profile-mobile").setAttribute("value", profile.mobile);
    document.getElementById("profile-address").setAttribute("value", profile.address);
    if (profile.additionalEmail.length > 0) {
      document.getElementById("profile-email").readOnly = true;
      document.getElementById("profile-address").readOnly = true;
    }
    console.log(document.getElementById("profile-address").value);
  });
}

async function createOrUpdateProfileOnClick() {
  updateProfileOnClick();
  await getProfileOnLoaded();
}

async function updateProfileOnClick() {
  let newMobile = document.getElementById("profile-mobile").value;
  console.log("updating mobile: " + newMobile);
  await updateProfile(newMobile);
}
