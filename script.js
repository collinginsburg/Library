const ISAWRAMALLAH = new Book("I Saw Ramallah", "Mourid Barghouti", 208, "off", "ISAWRAMALLAH");
const SIXDAYSOFWAR = new Book("Six Days of War: June 1967 and the Making of the Modern Middle East", "Michael B. Oren", 496, "off","SIXDAYSOFWAR");
const PALESTINESCHILDREN = new Book("Palestine's Children: Returning to Haifa & Other Stories", "Ghassan Kanafani", 199, "off", "PALESTINESCHILDREN");
const INSEARCHOFFATIMA = new Book("In Search of Fatima: A Palestinian Story", "Ghada Karmi", 452, "off", "INSEARCHOFFATIMA");
const OUTOFPLACE = new Book("Out of Place: A Memoir", "Edward Said", 336, "off", "OUTOFPLACE");
const LEMONTREE = new Book("The Lemon Tree: An Arab, a Jew, and the Heart of the Middle East", "Sandy Tolan", 400, "on","LEMONTREE");

let myLibrary = [ISAWRAMALLAH, SIXDAYSOFWAR, PALESTINESCHILDREN, INSEARCHOFFATIMA, OUTOFPLACE];
// let myLibrary = [ISAWRAMALLAH];
// let myLibrary = [];

// book object constructor
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
Book.prototype.makeRead = function(){
    if (this.read === 'on'){
        this.read = 'off';
    } else {
        this.read = 'on';
    }
}

// *******************************************LIBARY DISPLAYS*******************************************

// add book to library function: adds object to my library array, displays current library
function addBookToLibrary(newbook){
    myLibrary.push(newbook);
    displayBooks();
}

function displayBooks(){
    for(i=0; i<myLibrary.length; i++){
        if (checkDuplicateTitles()){ //checks if book is already displayed, skips it
            // console.error("DUPLICATE. CHOOSE ANOTHER TITLE");
        }else{
            let libgrid = document.querySelector('.libgrid');
            let bookdiv = document.createElement('div');
            let titlediv = document.createElement('div');
            let authordiv = document.createElement('div');
            let infodiv =  document.createElement('div');
            let pagenumdiv = document.createElement('div');
            let readdiv = document.createElement('div');
            
            let readstatusdiv = document.createElement('div');
            let readstatuslabel = document.createElement('label');
            let readstatusinput =  document.createElement('input');
            readstatuslabel.textContent = "Read?";
            readstatuslabel.setAttribute('for','cardreadstatus');
            readstatusinput.setAttribute('type','checkbox');
            readstatusinput.setAttribute('id','cardreadstatus');
            readstatusinput.setAttribute('name','cardreadstatus');
            readstatusinput.value = myLibrary[i].read;
            readstatusinput.addEventListener('change', updateReadStatus);
            readstatusdiv.appendChild(readstatuslabel);
            readstatusdiv.appendChild(readstatusinput);
            
    
            let closebutton = document.createElement('div');
            closebutton.textContent = 'X';
            titlediv.textContent = myLibrary[i].fulltitle;
            authordiv.textContent = myLibrary[i].author;
            pagenumdiv.textContent = myLibrary[i].pages + " pages";
            if (myLibrary[i].read === 'on'){
                readdiv.textContent = "have read";
                readstatusinput.checked = true;
            } else{
                readdiv.textContent = "have not read";
                readstatusinput.checked = false;
            }
            closebutton.addEventListener('click', deleteBook);
    
            infodiv.appendChild(pagenumdiv);
            infodiv.appendChild(readdiv);
    
            infodiv.appendChild(readstatusdiv);
    
            bookdiv.appendChild(closebutton);
            bookdiv.appendChild(titlediv);
            bookdiv.appendChild(authordiv);
            bookdiv.appendChild(infodiv);
            bookdiv.id = `b${i}`;
            bookdiv.setAttribute('data-index', `${i}`);
            bookdiv.classList.add(`bookdiv`);
            titlediv.classList.add('titlediv');
            authordiv.classList.add('authordiv');
            infodiv.classList.add('infodiv');
            pagenumdiv.classList.add('pagenumdiv');
            readdiv.classList.add('readdiv');
            closebutton.classList.add('btn', 'removebook');
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
        
        let readstatusdiv = document.createElement('div');
        let readstatuslabel = document.createElement('label');
        let readstatusinput =  document.createElement('input');
        readstatuslabel.textContent = "Read?";
        readstatuslabel.setAttribute('for','cardreadstatus');
        readstatusinput.setAttribute('type','checkbox');
        readstatusinput.setAttribute('id','cardreadstatus');
        readstatusinput.setAttribute('name','cardreadstatus');
        readstatusinput.value = myLibrary[i].read;
        readstatusinput.addEventListener('change', updateReadStatus);
        readstatusdiv.appendChild(readstatuslabel);
        readstatusdiv.appendChild(readstatusinput);
        

        let closebutton = document.createElement('div');
        closebutton.textContent = 'X';
        titlediv.textContent = myLibrary[i].fulltitle;
        authordiv.textContent = myLibrary[i].author;
        pagenumdiv.textContent = myLibrary[i].pages + " pages";
        if (myLibrary[i].read === 'on'){
            readdiv.textContent = "have read";
            readstatusinput.checked = true;
        } else{
            readdiv.textContent = "have not read";
            readstatusinput.checked = false;
        }
        closebutton.addEventListener('click', deleteBook);

        infodiv.appendChild(pagenumdiv);
        infodiv.appendChild(readdiv);

        infodiv.appendChild(readstatusdiv);

        bookdiv.appendChild(closebutton);
        bookdiv.appendChild(titlediv);
        bookdiv.appendChild(authordiv);
        bookdiv.appendChild(infodiv);
        bookdiv.id = `b${i}`;
        bookdiv.setAttribute('data-index', `${i}`);
        bookdiv.classList.add(`bookdiv`);
        titlediv.classList.add('titlediv');
        authordiv.classList.add('authordiv');
        infodiv.classList.add('infodiv');
        pagenumdiv.classList.add('pagenumdiv');
        readdiv.classList.add('readdiv');
        closebutton.classList.add('btn', 'removebook');
        libgrid.appendChild(bookdiv);
        }
}
initialDisplayBooks();

// update read status
 function updateReadStatus(e){
    let index = e.target.parentNode.parentNode.parentNode.dataset.index;
    console.log(index);
    if (myLibrary[index].read === 'on'){
        myLibrary[index].read = 'off';
    } else {
        myLibrary[index].read = 'on'
    }

 }

// delete book function
function deleteBook(e){
    let libgrid = document.querySelector('.libgrid');
    let index = e.target.parentNode.dataset.index;
    let bookdiv = document.querySelector(`div[data-index="${index}"]`); 
    myLibrary.splice(index, 1);
    libgrid.removeChild(bookdiv);
    displayBooks();
}

// *******************************************MODAL*******************************************

// new book button, open modal
const NEWBOOKBUTTON = document.querySelector('.newbook.btn');
const MODALFORM = document.querySelector('.modalformcontainer');
MODALFORM.style.display = 'none'
NEWBOOKBUTTON.addEventListener('click', displayModalForm);

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

// add book function inside modal
const ADDBOOKBUTTON = document.querySelector('#addbook');
ADDBOOKBUTTON.addEventListener('click', addBook);
function addBook(){
    let fulltitleinput = document.querySelector('#fulltitle').value;
    let authorinput =  document.querySelector('#author').value;
    let pageinput = document.querySelector('#pages').value;
    let nicknameinput = document.querySelector('#nickname').value;
    let readstatusinput = document.querySelector('#readstatus').value;
    let newbook = new Book(fulltitleinput, authorinput, pageinput, readstatusinput, nicknameinput);
    addBookToLibrary(newbook);
    displayModalForm();
    document.querySelector('#fulltitle').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#nickname').value = '';
    document.querySelector('#readstatus').value = 'off';
}



