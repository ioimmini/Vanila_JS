const random = document.getElementById("random_number");
const generate = document.querySelector("#random_number .generate");
const guess = document.querySelector("#random_number .guess");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

function onSubmit(event) {
  event.preventDefault();
  const newnum = generate.value;
  let selectnum = parseInt(guess.value);
  const correct = Math.floor(Math.random() * newnum);
  localStorage.setItem("selectnum", selectnum);
  console.log(correct, selectnum);
  greeting.classList.remove("hidden");
  greeting.innerText = `You chose : ${selectnum}, the machine chose : ${correct}`;
  greeting2.classList.remove("hidden");

  if (localStorage.getItem("selectnum") == correct) {
    greeting2.innerText = "You win !";
  } else {
    greeting2.innerText = "You lost !";
  }
}

random.addEventListener("submit", onSubmit);
