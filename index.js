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
    }
];

libraryContainer = document.getElementById('library-container');

fillLibrary = (library) => {
    for (i = 0; i < library.length; i++) {
        newBook = `
            <div class="book-container">

                <div class="book-title">
                    ${library[i].title}
                </div>

                <div class="book-info">
                    ${library[i].author} <br />
            
                    ${library[i].pages} pages<br />
                
                    ${library[i].read ? 'Read' : 'Not read'}
                </div>

                <div class="book-buttons">
                    <button class="book-btn read">Read book</button>
                    <button class="book-btn delete">Delete book</button>
                </div>
            </div>
        `
        libraryContainer.innerHTML += newBook;
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

function addBookToLibrary(library, book) {
    library.push(book);
}

fillLibrary(library);

// const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295', false)

// console.log(theHobbit.info())
// console.log(library);