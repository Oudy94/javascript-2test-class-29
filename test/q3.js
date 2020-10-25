
const books = [
      {
            bookName: "The Nature of Software Development",
            author: "Ron Jeffries",
            coverURL:
                  "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
      },
      {
            bookName: "Clean Code",
            author: "Robert Cecil Martin",
            coverURL: false
      }
    ]

function injectBooksToDOM(array){

    for (const book of array){
        const bookUnorderedList = document.createElement("ul");
        const bookList = document.createElement("li");

        document.body.appendChild(bookUnorderedList);
        bookUnorderedList.appendChild(bookList);

        bookList.textContent = `${book.bookName} - ${book.author}`;

        if (book.coverURL){
            const bookImage = document.createElement("img");
            bookImage.src = `${book.coverURL}`
            bookUnorderedList.appendChild(bookImage);
        }

    }
}

injectBooksToDOM(books);