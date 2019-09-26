document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  let tokenAvailable = checkTokenAvailable();
  console.log(`token availability: ${tokenAvailable}`);
  document.getElementById("post-switcher-view-posts").addEventListener("click", switchToViewPosts);
  document.getElementById("post-switcher-create").addEventListener("click", switchToCreatePost);
  document.getElementById("post-submit").addEventListener("click", createPostOnClick);
  document.getElementById("comment-submit")

  // add to every post
  document.getElementById("list-post").addEventListener("click", switchToViewAPost);
});

function switchToViewAPost(e) {
  alert("switchToViewAPost");
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-list").style.display = "none";
  document.getElementById("post-view").style.display = "block";
  //stopPropogation
  let divOnePostView = document.getElementById("list-post");
  let title = document.getElementById("list-post").children[0].innerText; //h3#list-post-title
  let content = document.getElementById("list-post").children[1].innerText; //p#list-post-content
  let meta = document.getElementById("list-post").children[2].innerText; //p#list-post-meta
  console.log(title);
}

async function switchToViewPosts() {
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-list").style.display = "block";
  document.getElementById("post-view").style.display = "none";
  let userPosts = await listPosts().then(response => {
    console.log(response);
  });
}
function switchToCreatePost() {
  document.getElementById("post-creation").style.display = "block";
  document.getElementById("posts-list").style.display = "none";
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
