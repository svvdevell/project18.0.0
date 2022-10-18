"use strict"

const addToDo = (value) => {
    let listItem = document.createElement("li");
    let listBtn = document.createElement("button");
    let toDoCheck = document.createElement("input");
  
    listItem.classList.add("list-item");
    listBtn.classList.add("btn-danger", "btn", "list-btn");
    toDoCheck.classList.add("todo-check", "form-check-input");
  
    listItem.innerHTML = `<span class = "list-item-text">${value}</span>`;
    listBtn.innerHTML = "Delete";
    toDoCheck.type = "checkbox";
  
    list.append(listItem);
    listItem.append(listBtn);
    listItem.prepend(toDoCheck);
  };

let userMessage = document.forms["user-message"];
let { ["text-message"]: textField } = userMessage.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");

userMessage.onsubmit = (event) => {
  event.preventDefault();
  if (textField.value.trim() === "") {
    textField.classList.add("is-invalid");
    errorMessage.innerHTML = "Please fill out this field";
    return;
  }
  addToDo(textField.value);
  userMessage.reset();
};

list.addEventListener("click", (event) => {
  let removeBtn = event.target.classList.contains("list-btn");
  if (removeBtn) {
    event.target.closest(".list-item").remove();
  }
});
// __________________________________________________________
list.addEventListener("change", (event) => {
  let checkbox = event.target.classList.contains("todo-check");
  let listItem = event.target.closest(".list-item");
  if (checkbox) {
    let isDone = event.target.checked;
    event.target.disabled = isDone;
    listItem.querySelector(".list-btn").disabled = isDone;
    listItem.querySelector(".list-item-text").style.textDecoration =
      ("line-through",".text-white");
  }
});

// __________________________________________________________
textField.oninput = () => {
  if (textField.classList.contains("is-invalid")) {
    textField.classList.remove("is-invalid");
    errorMessage.innerHTML = "";
  }
};