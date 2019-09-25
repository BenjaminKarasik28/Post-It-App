document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  let tokenAvailable = checkTokenAvailable();
  console.log(`token availability: ${tokenAvailable}`);
  document.getElementById("post-switcher-view").addEventListener("click", switchToView);
  document.getElementById("post-switcher-create").addEventListener("click", switchToCreate);
  document.getElementById("post-submit").addEventListener("click", createPostOnClick);
});

async function switchToView() {
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("post-view").style.display = "block";
  let userPosts = await listPosts().then(response => {
    console.log(response);
  });
}
function switchToCreate() {
  document.getElementById("post-creation").style.display = "block";
  document.getElementById("post-view").style.display = "none";
}

function checkTokenAvailable() {
  if (sessionStorage.getItem("token") === null) {
    return false;
  }
  return true;
}

function createPostOnClick() {
  try {
    let title = document.querySelector("#post-title").value;
    let dscrpt = document.querySelector("#post-content").value;
    console.log(title);
    console.log(dscrpt);
    createPost(title, dscrpt);
  } catch (err) {
    console.log(err);
  }
}
