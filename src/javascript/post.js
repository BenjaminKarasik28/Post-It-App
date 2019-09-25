document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  document.getElementById("post-submit").addEventListener("click", createPostOnClick);
});

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
