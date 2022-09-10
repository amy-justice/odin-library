let library = [];

libraryContainer = document.getElementById('library-container');

updateLibrary = (library) => {
    libraryContainer.innerHTML = '';
    for (i = 0; i < library.length; i++) {
        newBook = `
            <div class="book-container" id="${i}">

                <div class="book-title">
                    ${library[i].title}
                </div>

                <div class="book-info">
                    ${library[i].author} <br />
            
                    ${library[i].pages} pages<br />
                
                    ${library[i].read ? 'Read' : 'Not read'}
                </div>

                <div class="book-buttons">
                    <button class="book-btn read" id="${i}">${library[i].read ? "Mark as unread" : "Mark as read"}</button>
                    <button class="book-btn delete" id="${i}"><img src="/images/delete.png"></button>
                </div>
            </div>
        `
        libraryContainer.innerHTML += newBook;
        readButtonSetup();
        deleteButtonSetup();
    }
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${((read) ? 'read.' : 'not read yet.')}`)
    }
}

addBookToLibrary = (library, book) => {
    library.push(book);
    updateLibrary(library);
}

markAsRead = id => {
    if (library[id].read) {
        library[id].read = false;
    } else if (!library[id].read) {
        library[id].read = true;
    }
    updateLibrary(library);
}

deleteBook = id => {
    library.splice(id, 1);
    updateLibrary(library);
}

// const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295', false)

// console.log(theHobbit.info())
// console.log(library);

readButtonSetup = () => {
    readButtons = document.querySelectorAll('.read');
    readButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            book = e.target.id;
            markAsRead(book);
        })
    })
}

deleteButtonSetup = () => {
    deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            book = e.target.id;
            deleteBook(book);
        })
    })
}

// modal for adding books
let modal = document.getElementById('add-book-window');
let addButton = document.getElementById('add-book-button');
let submitButton = document.getElementById('submit-book');

addButton.addEventListener('click', () => {
    modal.style.display = "block";
})

discard.addEventListener('click', () => {
    modal.style.display = "none";
    clearForm();
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

clearForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = false;
}

submitButton.addEventListener('click', e => {
    e.preventDefault();
    let newBook = new Book();
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;
    newBook.read = document.getElementById('read').value;
    addBookToLibrary(library, newBook);
    clearForm();
    modal.style.display = 'none';
})

updateLibrary(library);