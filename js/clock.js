const clock = document.querySelector("#clock");


function getClock(){
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0"); // String() 숫자를 문자로 바꿔주기. padStart(최종적으로늘리고싶은글자수, 앞에 붙일 문자)
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

getClock(); // 1초 후에 실행되지 않고 바로 실행하기 위해서
setInterval(getClock, 1000); // 반복할 행동. (실행할 함수, 초(1000=1초))