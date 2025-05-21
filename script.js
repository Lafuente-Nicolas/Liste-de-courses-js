"use strict";

let productList = document.getElementById("liste-produits");

document.getElementById("form-produit").addEventListener("submit", function(event) {
    event.preventDefault();
    addFormProduit();
});

function addFormProduit(){
    let input = document.getElementById("produit");
    let taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let editButton = document.createElement("button");
    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"> </ion-icon>';
    editButton.onclick = function() {
        editForm(li);
    }
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"> </ion-icon>';
    deleteButton.onclick = function() {
        deleteForm(li);
    }
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    productList.appendChild(li);
    form.value = "";

}

function editForm(task) {
    let text = task.firstChild.textContent;
      let newTaskText = prompt("Modifier le produit :", text);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    task.firstChild.textContent = newTaskText;

  }

      textElement.textContent = newTaskText;
}

function deleteForm(task) {
 productList.removeChild(task);
}