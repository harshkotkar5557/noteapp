// if user add a note to local storage
console.log('helow')
let addBtn = document.getElementById('addBtn');
showNotes();

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt")
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes");
    console.log(notes)
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);   //here we converted array-object form array-string
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);

    showNotes();

});

// shownotes 

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard" style="width: 18rem;">
             <div class="card-body">
                 <h5 class="card-title"> ${element.title} </h5>
                 <p class="card-text">${element.text}</p>
                 <button id= "${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete note</button>
             </div>
         </div>
        `
        let notesV = document.getElementById("notes");
        if (notesObj.length != 0) {
            notesV.innerHTML = html;
        } else {
            notesV.innerHTML = "Nothing here, add something"
        }

    });
}
// function to delete note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// search notes from saved notes
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = (element.getElementsByTagName("p")[0 ].innerText) +
            (element.getElementsByTagName("h5")[0].innerText);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

const protoOne = {

    slogan: function () {
        return 'this is good comapny'
    },
    changeName: function (newName) {
        this.name = newName
    }
}

let harry = Object.create(protoOne);
harry.name = "vaibhav";
harry.role = "coder"
harry.changeName("haresh")
console.log(harry);