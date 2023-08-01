// navbar
let navbar = document.querySelector(".navbar");
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function(){
    console.log("clicked");
    if(navbar.classList.contains("active-nav")){
        navbar.classList.remove("active-nav");
    }else{
        navbar.classList.add("active-nav");
        login.classList.remove("active-login");
    }

}

// login
let login = document.querySelector(".login");
let loginBtn = document.getElementById("login-btn");

loginBtn.onclick = function(){
    console.log("clicked");
    login.classList.toggle("active-login");
    navbar.classList.remove("active-nav");
    menuBtn.classList.remove("fa-xmark");

}
// show and hide password
let eye = document.getElementById("eye");
let pass = document.getElementById("pass");

eye.addEventListener("click",()=>{
    console.log("clicked");
    if(eye.textContent == "show"){
        eye.innerHTML = "hide";
        pass.setAttribute("type","text");
    }else{
        eye.innerHTML = "show";
        pass.removeAttribute("type","text");
        pass.setAttribute("type","password");
    }
});
// theme
let theme = document.getElementById("theme-btn");

theme.onclick = function(){
    console.log("clicked");
    theme.classList.toggle("fa-sun");
    if(theme.classList.contains("fa-sun")){
        document.body.classList.add("active-theme");
    }else{
        document.body.classList.remove("active-theme");
    }
}

window.onscroll = function(){
    login.classList.remove("active-login");
    navbar.classList.remove("active-nav");
    menuBtn.classList.remove("fa-xmark");
}

// search
let search = document.getElementById("search-btn");
let form1 = document.querySelector(".form-1");

search.onclick = function(){
    form1.classList.toggle("show-search");
}

// theme local storage
