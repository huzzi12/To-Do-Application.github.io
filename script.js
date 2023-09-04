// const inputBox = document.querySelector("#inputBox")
// const listcontainer = document.querySelector("#listcontainer")
// const popupContainer = document.querySelector("#popupContainer")
// const okBtnPopUp = document.querySelector("#okBtnPopUp")

// function addSchool() {
//     if(inputBox.value.length > 26) {
//         return alert("School name must be at least 26 characters!"),
//         inputBox.value = ""
//      }
  
     
//     if(inputBox.value === '') {
//         popupContainer.style.display = "block"
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listcontainer.appendChild(li)
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span)
//     }
    
//     inputBox.value = ""
//     saveData()
// }



// listcontainer.addEventListener("click", (e) => {
//     if(e.target.tagName === "LI") {
//         e.target.classList.toggle("checked")
//         saveData()
//     }
//     else if(e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("School", listcontainer.innerHTML)
// }



// function showSchool() {
//     listcontainer.innerHTML = localStorage.getItem("School")
// }
// showSchool()

 
// popupContainer.style.display = "none"


// okBtnPopUp.addEventListener("click", () => {
//     okBtnPopUp.style.display = "block"
// })







// chatGPT code

const inputBox = document.querySelector("#inputBox");
const listcontainer = document.querySelector("#listcontainer");
const popupContainer = document.querySelector("#popupContainer");
const okBtnPopUp = document.querySelector("#okBtnPopUp");
const popUpErrorMsg = document.querySelector("#popUpErrorMsg");

function addSchool() {
    if (inputBox.value.length > 26) {
        popupContainer.style.display = "block";
        popUpErrorMsg.innerText = "School name must be at least 26 characters!";
        inputBox.value = "";

        // return alert("School name must be at least 26 characters!")
    }

    else if (inputBox.value === "") {
        popupContainer.style.display = "block";
        popUpErrorMsg.innerText = "Please enter any school name!"
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem("School", listcontainer.innerHTML);
}

function showSchool() {
    listcontainer.innerHTML = localStorage.getItem("School");
}
showSchool();

popupContainer.style.display = "none";

okBtnPopUp.addEventListener("click", () => {
    popupContainer.style.display = "none";
});
