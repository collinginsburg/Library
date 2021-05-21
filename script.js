const ISAWRAMALLAH = new Book("I Saw Ramallah", "Mourid Barghouti", 208, "have not read", "ISAWRAMALLAH");
const SIXDAYSOFWAR = new Book("Six Days of War: June 1967 and the Making of the Modern Middle East", "Michael B. Oren", 496, "have not read","SIXDAYSOFWAR");
const PALESTINESCHILDREN = new Book("Palestine's Children: Returning to Haifa & Other Stories", "Ghassan Kanafani", 199, "have not read", "PALESTINESCHILDREN");
const INSEARCHOFFATIMA = new Book("In Search of Fatima: A Palestinian Story", "Ghada Karmi", 452, "have not read", "INSEARCHOFFATIMA");
const OUTOFPLACE = new Book("Out of Place: A Memoir", "Edward Said", 336, "have not read", "OUTOFPLACE");
const LEMONTREE = new Book("The Lemon Tree: An Arab, a Jew, and the Heart of the Middle East", "Sandy Tolan", 400, "have read","LEMONTREE");

let myLibrary = [ISAWRAMALLAH, SIXDAYSOFWAR, PALESTINESCHILDREN, INSEARCHOFFATIMA, OUTOFPLACE];
// let myLibrary = [ISAWRAMALLAH];

function Book(fulltitle, author, pages, read, reftitle){
    this.fulltitle = fulltitle;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.reftitle = reftitle;
    this.info = function(){
        return(this.fulltitle + ", " + this.author + ", " + this.pages + ", " + this.read);
    }
}



function addBookToLibrary(newbook){
    myLibrary.push(newbook);
    displayBooks();
}




function displayBooks(){
    for(i=0; i<myLibrary.length; i++){
        if (checkDuplicateTitles()){
            // console.error("DUPLICATE. CHOOSE ANOTHER TITLE");
        }else{
            let libgrid = document.querySelector('.libgrid');
            let bookdiv = document.createElement('div');
            let titlediv = document.createElement('div');
            let authordiv = document.createElement('div');
            let infodiv =  document.createElement('div');
            let pagenumdiv = document.createElement('div');
            let readdiv = document.createElement('div'); 
            titlediv.textContent = myLibrary[i].fulltitle;
            authordiv.textContent = myLibrary[i].author;
            pagenumdiv.textContent = myLibrary[i].pages + " pages";
            readdiv.textContent = myLibrary[i].read;
            infodiv.appendChild(pagenumdiv);
            infodiv.appendChild(readdiv);
            bookdiv.appendChild(titlediv);
            bookdiv.appendChild(authordiv);
            bookdiv.appendChild(infodiv);
            bookdiv.id = `b${i}`;
            bookdiv.classList.add(`bookdiv`);
            titlediv.classList.add('titlediv');
            authordiv.classList.add('authordiv');
            infodiv.classList.add('infodiv');
            pagenumdiv.classList.add('pagenumdiv');
            readdiv.classList.add('readdiv');
            libgrid.appendChild(bookdiv);
        }
    }
}



function checkDuplicateTitles(){

    if (document.querySelector(`#b${i}`)){
        return true
    }else{
        return false
    }

    };



function initialDisplayBooks(){
    for(i=0; i<myLibrary.length; i++){
        let libgrid = document.querySelector('.libgrid');
        let bookdiv = document.createElement('div');
        let titlediv = document.createElement('div');
        let authordiv = document.createElement('div');
        let infodiv =  document.createElement('div');
        let pagenumdiv = document.createElement('div');
        let readdiv = document.createElement('div'); 
        titlediv.textContent = myLibrary[i].fulltitle;
        authordiv.textContent = myLibrary[i].author;
        pagenumdiv.textContent = myLibrary[i].pages + " pages";
        readdiv.textContent = myLibrary[i].read;
        infodiv.appendChild(pagenumdiv);
        infodiv.appendChild(readdiv);
        bookdiv.appendChild(titlediv);
        bookdiv.appendChild(authordiv);
        bookdiv.appendChild(infodiv);
        bookdiv.id = `b${i}`;
        bookdiv.classList.add(`bookdiv`);
        titlediv.classList.add('titlediv');
        authordiv.classList.add('authordiv');
        infodiv.classList.add('infodiv');
        pagenumdiv.classList.add('pagenumdiv');
        readdiv.classList.add('readdiv');
        libgrid.appendChild(bookdiv);
        }
}
initialDisplayBooks();


// new book button
const NEWBOOK = document.querySelector('.newbook.btn');
const MODALFORM = document.querySelector('.modalformcontainer');
MODALFORM.style.display = 'none'
NEWBOOK.addEventListener('click', displayModalForm);

function displayModalForm(){
    if (MODALFORM.style.display === 'none'){
        MODALFORM.style.display = 'flex';
    } else {
        MODALFORM.style.display = 'none';
    }
}

// close modal
const CLOSEBUTTON = document.querySelector('.modalformclose');
CLOSEBUTTON.addEventListener('click', displayModalForm);