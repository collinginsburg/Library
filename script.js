const ISAWRAMALLAH = new Book("I Saw Ramallah", "Mourid Barghouti", 208, false);
const SIXDAYSOFWAR = new Book("Six Days of War: June 1967 and the Making of the Modern Middle East", "Michael B. Oren", 496, false);
const PALESTINESCHILDREN = new Book("Palestine's Children: Returning to Haifa & Other Stories", "Ghassan Kanafani", 199, false);
const INSEARCHOFFATIMA = new Book("In Search of Fatima: A Palestinian Story", "Ghada Karmi", 452, false);
const OUTOFPLACE = new Book("Out of Place: A Memoir", "Edward Said", 336, false);
const LEMONTREE = new Book("The Lemon Tree: An Arab, a Jew, and the Heart of the Middle East", "Sandy Tolan", 400, true);

// let myLibrary = [ISAWRAMALLAH, SIXDAYSOFWAR, PALESTINESCHILDREN, INSEARCHOFFATIMA, OUTOFPLACE, LEMONTREE];
let myLibrary = [ISAWRAMALLAH, SIXDAYSOFWAR];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return(this.title + ", " + this.author + ", " + this.pages + ", " + this.read);
    }
}



function addBookToLibrary(newbook){
    myLibrary.push(newbook);
    displayOneBook();
}

function displayBooks(){
    for(i=0; i<myLibrary.length; i++){
        let libgrid = document.querySelector('.libgrid');
        let bookdiv = document.createElement('div');
        let titlediv = document.createElement('div');
        let authordiv = document.createElement('div');
        authordiv.textContent = myLibrary[i].author;
        titlediv.textContent = myLibrary[i].title;
        bookdiv.appendChild(titlediv);
        bookdiv.appendChild(authordiv);
        bookdiv.classList.add('bookdiv');
        titlediv.classList.add('titlediv');
        authordiv.classList.add('authordiv');
        libgrid.appendChild(bookdiv);
    }
}

function displayOneBook(){
        let libgrid = document.querySelector('.libgrid');
        let bookdiv = document.createElement('div');
        let titlediv = document.createElement('div');
        let authordiv = document.createElement('div');
        authordiv.textContent = myLibrary[myLibrary.length - 1].author;
        titlediv.textContent = myLibrary[myLibrary.length - 1].title;
        bookdiv.appendChild(titlediv);
        bookdiv.appendChild(authordiv);
        bookdiv.classList.add('bookdiv');
        titlediv.classList.add('titlediv');
        authordiv.classList.add('authordiv');
        libgrid.appendChild(bookdiv);
}

displayBooks();
// displayOneBook();