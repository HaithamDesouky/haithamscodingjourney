//book constructor - creating books

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor - add the list
function UI(){}

//event listeners

document.getElementById("book-form").addEventListener("submit",
function(e) {
    alert("helloo")

    e.preventDefault();
})