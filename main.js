const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const greeting = document.querySelector("#greeting");
const HIDE_CLASSLIST = "hidden";

function handleLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDE_CLASSLIST);
    const username = loginInput.value;
    localStorage.setItem("username", username);  
    greeting.innerText = `Hello ${username}`;  
    greeting.classList.remove(HIDE_CLASSLIST);
};

loginForm.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginForm.classList.remove(HIDE_CLASSLIST);
    loginForm.addEventListener("submit", handleLogin);
} else {
    greeting.innerText = `Hello ${savedUsername}`; 
    greeting.classList.remove(HIDE_CLASSLIST);
}