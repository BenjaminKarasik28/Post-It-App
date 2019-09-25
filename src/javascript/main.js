
    
document.addEventListener("DOMContentLoaded", function(e) {
    let loggedInFlag = false
    loadPosts(loggedInFlag)
    e.preventDefault();

    
    
    document.querySelector("#login").addEventListener("click", function(e){
        if(logInOnClick()){
            console.log('YEAHAHAHAHAH')
        }
    });
  });
  
  function signUpOnClick() {}
  
  function loadButtonsOnLogin(){

  }


  function logInOnClick() {
    let emailInput = document.querySelector("#username").value;
    let passwordInput = document.querySelector("#password").value;
    console.log(`email: ${emailInput} password: ${passwordInput}`);
    let loggin_token = logIn("venom@superhero.com", "venom");
    console.log(loggin_token);
    if (loggin_token) {
      document.querySelector("#form").innerHTML = " ";
      let index = emailInput.indexOf("@");
      let profileName = emailInput.slice(0, index);
      let linkToProfile = document.createElement("a");
      linkToProfile.innerHTML = profileName;
      linkToProfile.href = "#";
      document.querySelector("#header").appendChild(linkToProfile);
      console.log(linkToProfile);
      return true
    }
    else return false

    
  }
   
function loadPosts (loggedInFlag){
    let url  = `http://thesi.generalassemb.ly:8080/post/list`
    getData(url)
    .then(posts =>{
        
        posts.forEach((post) => {

            let title = `Title: ${post.title}`
            let postTitle = document.createElement('h1')
            postTitle.textContent = title


            let desc = post.description
            let postDesc = document.createElement('p')
            postDesc.textContent = desc

            let username = ` by: ${post.user.username}`
            console.log(username)
            let postUsername = document.createElement('p')
            postUsername.textContent = username
            
            

            let commentOnAPost = document.createElement('button') 
            
                console.log('IM HERE')
                let addComment = "add a comment"
                
                commentOnAPost.textContent = addComment
               
            

        
            
            document.querySelector('#main').appendChild(postTitle)
            document.querySelector('#main').appendChild(postDesc)
            document.querySelector('#main').appendChild(postUsername)

            if(!loggedInFlag)
            document.querySelector('#main').appendChild(commentOnAPost)
            
           

        })
        
    })
}
