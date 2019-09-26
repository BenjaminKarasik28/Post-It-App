document.addEventListener("DOMContentLoaded", function(e) {
    loadPosts()
    let logInButton = document.createElement('button')
    loadLogin(logInButton)
    
    logInButton.addEventListener('click', function(e){
      
      loadUser()
        
    })
   
})

function loadUser(){

    let emailInput = document.querySelector("#username").value
    let passwordInput = document.querySelector("#password").value

    console.log(emailInput)
    console.log(passwordInput)

    fetch("http://thesi.generalassemb.ly:8080/login", {
        method : "post",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: emailInput,
        password : passwordInput
    })

    })
    .then(response => {
        return response.json()
    })
    .then((json) => {
        
        let token = json.token
        if(token!==undefined){
            console.log(token)
            localStorage.setItem("email", emailInput)
            localStorage.setItem("sessionToken", token)
            location.reload();
        }
        else{
            let loginError = document.createElement('p')
            loginError.textContent = "Your email or password is incorrect"
            loginError.style.color  = "red"
            document.querySelector("#login").appendChild(loginError)
        }
        
        
    })
    .catch(error =>{
        alert(error)
    })

}
function loadPosts(){
    fetch("http://thesi.generalassemb.ly:8080/post/list", {
        method: "GET"
    })
    .then((response) => {
        return response.json();
    })
    .then(posts =>{
        
        console.log(localStorage.getItem("sessionToken"))

        if(localStorage.getItem("sessionToken") !==null){
            console.log("I MADE IT MAMA")
        }
        
        posts.forEach((post)=>{
            let title = `Title: ${post.title}`
            let postTitle = document.createElement('h1')
            postTitle.textContent = title

            let desc = post.description
            let postDesc = document.createElement('p')
            postDesc.textContent = desc

            let username = ` by: ${post.user.username}`
            let postUsername = document.createElement('p')
            postUsername.textContent = username


            if(localStorage)
            document.querySelector('#main').appendChild(postTitle)
            document.querySelector('#main').appendChild(postDesc)
            document.querySelector('#main').appendChild(postUsername)


        })
    })
}
   


function loadLogin(logInButton){
    if(!localStorage.getItem("sessionToken") ) { //replace with token DEFINITELY
        console.log("im here")
        console.log(typeof(localStorage.getItem("sessionToken")))
        
        
        logInButton.textContent = "log in"
        document.querySelector("#login").innerHTML = `<input id = "username" placeholder="email">
            <input id = "password" type= "password" placeholder="password" >`
        logInButton.type = "submit"
        logInButton.value = "Log in"
        document.querySelector("#login").appendChild(logInButton)
    }
    else {
        let userName = localStorage.getItem("email").split("@")[0]
        let helloUsername = `Welcome back, ${userName[0].toUpperCase()}${userName.slice(1)}`
        let welcomeBack = document.createElement("p")
        welcomeBack.textContent = helloUsername
        document.querySelector("#login").appendChild(welcomeBack)
    }

}
