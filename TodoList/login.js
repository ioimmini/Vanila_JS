const loginForm = document.querySelector("#login-form");
const todoForm = document.querySelector("#todo-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".todo");
const ul = document.querySelector("ul");
const logout = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  ul.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username}'s ToDoList`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME);
  ul.classList.add(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
function logOut(){
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
    localStorage.removeItem("todos");
}

logout.addEventListener("click", logOut);