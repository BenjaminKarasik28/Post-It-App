document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  let tokenAvailable = checkTokenAvailable();
  if (tokenAvailable) {
    document.getElementById("form-to-login").style.display = "none";
    document.getElementById("logined-username").innerText = sessionStorage.getItem("username");
  } else {
    document.getElementById("form-logined").style.display = "none";
  }
  console.log(`token availability: ${tokenAvailable}`);
  document.getElementById("post-switcher-view-posts").addEventListener("click", switchToViewPosts);
  document.getElementById("post-switcher-create").addEventListener("click", switchToCreatePost);
  document.getElementById("post-submit").addEventListener("click", createPostOnClick);
  document.getElementById("comment-submit").addEventListener("click", createCommentOnClick);

  // add to every post
  document.getElementById("list-post").addEventListener("click", switchToViewAPost);
});

// TODO: test
function createCommentOnClick() {
  try {
    let meta = document.getElementById("post-view-meta").innerText;
    let postid = meta.split(" ")[2]; // post id: id ==> id
    let comment = document.querySelector("#comment-content").value;
    console.log(postid, comment);
    createComment(postid, comment);
  } catch (err) {
    console.log(err);
  }
}
function switchToViewAPost(e) {
  // alert("switchToViewAPost");
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-list").style.display = "none";
  document.getElementById("post-view").style.display = "block";
  console.log(this);
  //stopPropogation
  let divOnePostView = this.children;
  let title = divOnePostView[0].innerText; //h3#list-post-title
  let content = divOnePostView[1].innerText; //p#list-post-content
  let meta = divOnePostView[2].innerText; //p#list-post-meta
  document.getElementById("post-view-title").innerText = title;
  document.getElementById("post-view-content").innerText = content;
  document.getElementById("post-view-meta").innerText = meta;

  let id = meta;
  document.getElementById("post-view-comments").innerHTML = "";
  console.log(getCommentByPostId(id));
}

async function switchToViewPosts() {
  document.getElementById("post-creation").style.display = "none";
  document.getElementById("posts-list").style.display = "block";
  document.getElementById("post-view").style.display = "none";
  let userPosts = await listPosts().then(response => {
    displayUserPosts(response);
  });
}
function displayUserPosts(data) {
  let username = sessionStorage.getItem("username");
  console.log(username);
  console.log(data);
  let filteredData = data.filter(data => data.user.username === username);

  let targetElement = document.getElementById("posts-list");
  targetElement.innerHTML = "";
  for (let i = 0; i < filteredData.length; i++) {
    // withdraw target content
    let newItem = filteredData[i];
    let title = newItem.title;
    let content = newItem.description;
    let meta = newItem.id;
    // construct to html
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "list-post");
    let newTitle = document.createElement("h3");
    newTitle.setAttribute("id", "list-post-title");
    newTitle.innerText = title;
    let newContent = document.createElement("p");
    newContent.setAttribute("id", "list-post-content");
    newContent.innerText = content;
    let newMeta = document.createElement("p");
    newMeta.setAttribute("id", "list-post-meta");
    newMeta.innerText = "post id: " + meta;
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newContent);
    newDiv.appendChild(newMeta);
    // add to listener
    newDiv.addEventListener("click", switchToViewAPost);
    targetElement.appendChild(newDiv);
  }
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
