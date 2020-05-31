//book constructor - creating books

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor - add the list
function UI(){}

UI.prototype.addBookToList = function(book){

    const list = document.getElementById("book-list");

    //create tr element
    const row = document = document.createElement("tr");
    
    console.log(row)

    // insert cols
    row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td><a href="#" class="delete">X</a></td>
`;
    list.appendChild(row);

    //clear fields

    UI.prototype.clearFields = function() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    
}

//event listeners

document.getElementById("book-form").addEventListener("submit", 
function(e) {

  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("title").value

        console.log(title, author, isbn)

        

        //instantiate book
const book = new Book(title, author, isbn);

// instantiate UI
const ui = new UI();
console.log(ui)

//add book to list

ui.addBookToList(book);

//clear fields

ui.clearFields()

e.preventDefault();

})