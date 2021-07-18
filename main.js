const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const greeting = document.querySelector("#greeting");
const HIDE_CLASSLIST = "hidden";
const USERNAME_KEY = "username";

function handleLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDE_CLASSLIST);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  
    paintGreeting(username);
};

loginForm.addEventListener("submit", handleLogin);

function paintGreeting(name){
    greeting.innerText = `Hello ${name}`;  
    greeting.classList.remove(HIDE_CLASSLIST);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDE_CLASSLIST);
    loginForm.addEventListener("submit", handleLogin);
} else {
    paintGreeting(savedUsername);
};