const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list"); //입력한 todo 출력할 부모 ul

// /// text와 id의 객체들이 포함된 배열이 저장되는 공간.
let todos = [];

// /// (4) 🤩 todo가 받은 값을 localstorage에 저장하는함수
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos)); //stringfy: 뭐든지 string타입의 text로 변환시키는 것 
                                                          // localStorage에 key값: todos, value값: string으로 변환된 배열로 저장시킴.
}
// /// 🐸 버튼 눌려진 li를 지우는 함수
function deleteTodo(event){
    const li = event.target.parentElement; // event.target -> 이벤트가 일어난 대상(여기선 버튼)의 부모요소를 li로 선언
    todos = todos.filter(todo => todo.id !== parseInt(li.id) ); // 
    li.remove(); // 그 li값을 지운다.
    saveTodos(); // 제거한 li가 있는 새로운 array를 todos에 다시 저장
}

// /// (3) 🐬 todo를 화면에 출력하는 함수(li,span 생성)
function paintTodoList(todoValue){
    const li = document.createElement("li"); // li 생성
    li.id = todoValue.id; // li에 Date.now()값을 id로 추가
    const span = document.createElement("span"); // span 생성
    span.innerText = todoValue.text; // span 안의 내용을 입력받은 값으로 채우기
                                     // 원래는 todoValue였지만, 값이 object가 됐기 때문에 함수의 입력값(=todoValue=>밑에 handleTodoInput의 todoValue와는 다른 것. 그냥 정해둔 이름)
                                     // 입력하면 값이 text와 id 두개가 생기니까 그 중 text값만 받기위해서 todoValue.text가 된 것.
    const button = document.createElement("button"); // button 생성
    button.innerText = "X"; // button 안의 내용을 "X"로 채우기
    button.addEventListener("click", deleteTodo); // 버튼을 클릭하면 deleteTodo 함수 호출하기 🐸
    li.appendChild(span); // <li>**<span>입력값</span>**</li>
    li.appendChild(button); // <li><span>입력값</span>**<button>X</button>**</li>
    todoList.appendChild(li); // <ul id="todo-list">**<li><span>입력값</span><button>X</button></li>**</ul>
}

// /// (2) todo에 쓰인 값을 받는 함수
function handleTodoInput(event){
    event.preventDefault(); // 엔터치면 새로고침되는 submit의 기본동작을 막음(값을 받기 위해)
    const todoValue = todoInput.value; // input값 = todoValue
    const newTodoObj ={ //input을 단순text만이 아닌, text와 id 두개를 포함한 object로 새로 설정
        text: todoValue,
        id: Date.now(), //입력 시간을 자세한 초단위로 나타냄(랜덤한 숫자처럼 보임)
    };
    todoInput.value = ""; //엔터 후 입력창 비워지게 하기
    todos.push(newTodoObj); // 비어있는 todos array에 text,id값을 포함한 객체의 배열 추가하기
    paintTodoList(newTodoObj); // 원래는 todoValue를 받았지만, html에 id값을 포함하기 위해 객체로 변경
                              // 🐬 입력받은 값을 화면에 출력하는 함수 호출(위로!!)
    saveTodos(); // 🤩 입력받은 객체를 localStorage에 저장하는 함수 호출(위로!!)
}

// (1) form 안의 input에 값을 입력한 후 엔터를 치면 handleTodoInput 함수를 브라우저에 전달한다. 
todoForm.addEventListener("submit", handleTodoInput);


// 
// function hello(item){
//     console.log("hello to ", item);
// }
// { parsedTodos.foreach(hello);}
//  =
// parsedTodos.forEach((item) => console.log("hello to", item));

// (5) todos라는 key값의 value를 savedTodos로 선언.
const savedTodos = localStorage.getItem("todos");

// (6)
if(savedTodos !== null){ // 만약 savedTodos(저장된 입력값)이 있다면,
    const parsedTodos = JSON.parse(savedTodos); //parse: string을 js에서 사용가능한 object로 변환(여기서는array로)
                                                // string으로 저장되있던 array를 사용 가능한 array로 변환.
    todos = parsedTodos; // todos(배열)에 다시 사용 가능한 array를 집어넣는다.
    parsedTodos.forEach(paintTodoList); // foreach: 각각의 아이템에 대해 하나의 function 실행시키는 것
                                        // array 각각의 객체의 text값을 하나씩 화면에 보여준다.
}


//  const arr = [1,2,3,4];
// function filter(item){return item > 2};
// const newArr = arr.filter(filter);
// 간단하게 쓰는법==> const newArr = arr.filter(item => item > 2 );