const notesContainer = document.querySelector(".notes-container");  
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML - localStorage.getItem("notes")
}
showNotes();

function updateStroange() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn. addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document. createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "image/R.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove(); 
        updateStroange();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStroange();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        Event.prevenDefault();
    }
})