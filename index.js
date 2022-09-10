let library = [
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "pages": 295,
        "read": true
    },
    {
        "title": "Harry Potter the Philosopher's Stone",
        "author": "J.K. Rowling",
        "pages": 300,
        "read": false
    },
    {
        "title": "Book",
        "author": "Author",
        "pages": 500,
        "read": "false"
    }
];

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
                    <button class="book-btn read" id="${i}">Read book</button>
                    <button class="book-btn delete" id="${i}">Delete book</button>
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
            console.log(book);
            deleteBook(book);
        })
    })
}

updateLibrary(library);