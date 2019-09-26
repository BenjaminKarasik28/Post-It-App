document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  let tokenAvailable = checkTokenAvailable();
  console.log(`token availability: ${tokenAvailable}`);
  document.getElementById("post-switcher-view-posts").addEventListener("click", switchToViewPosts);
  document.getElementById("post-switcher-create").addEventListener("click", switchToCreatePost);
  document.getElementById("post-submit").addEventListener("click", createPostOnClick);

  // add to every post
  document.getElementById("a-post").addEventListener("click", switchToViewAPost);
});

function switchToViewAPost(e) {
  alert("switchToViewAPost");
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-view").style.display = "none";
  document.getElementById("one-post-view").style.display = "block";
  //stopPropogation
  let divOnePostView = document.getElementById("one-post-view");
  let title = document.getElementById("a-post").children[0].innerText; //h3#a-post-title
  let content = document.getElementById("a-post").children[1].innerText; //p#a-post-content
  let meta = document.getElementById("a-post").children[2].innerText; //p#a-post-meta
  divOnePostView.innerHTML = "<h1>" + title + "</h1>" + "<p>" + content + "</p>" + "<p>" + meta + "</p>";

}

async function switchToViewPosts() {
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-view").style.display = "block";
  document.getElementById("one-post-view").style.display = "none";
  let userPosts = await listPosts().then(response => {
    console.log(response);
  });
}
function switchToCreatePost() {
  document.getElementById("post-creation").style.display = "block";
  document.getElementById("posts-view").style.display = "none";
  document.getElementById("one-post-view").style.display = "none";
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
