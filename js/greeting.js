const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const greeting = document.querySelector("#greeting");
const HIDE_CLASSLIST = "hidden";
const USERNAME_KEY = "username"; // localStorage에서 value가 사용자이름인 key의 값

function handleLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDE_CLASSLIST); //엔터를 누르면 이름입력창 없어지게
    const username = loginInput.value; // username = 입력창에 들어온 값(사용자의 이름)
    localStorage.setItem(USERNAME_KEY, username);  // localStorage에 USERNAME_KEY를 key값으로 하는 사용자의 이름 저장 
    paintGreeting(username); // 😀 함수 실행
};

loginForm.addEventListener("submit", handleLogin);

function paintGreeting(name){ // 😀
    greeting.innerText = `Have a nice day ${name} :)`;  
    greeting.classList.remove(HIDE_CLASSLIST);
}


const savedUsername = localStorage.getItem(USERNAME_KEY); // USERNAME_KEY를 키값으로 하는 value 가져오기

if(savedUsername === null){ // 저장된 이름이 없을 경우
    loginForm.classList.remove(HIDE_CLASSLIST); // 가려진 로그인폼을 보이게 하기
    loginForm.addEventListener("submit", handleLogin); // 로그인폼에 입력되면 handleLogin 함수 호출
} else {
    paintGreeting(savedUsername); // 저장된 이름이 있을 경우, greeting 출력
};