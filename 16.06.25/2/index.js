import { Book } from "./Class.js";

const book1 = new Book('Harry Potter', 5500, 'This article is about the novel series. For the character, see Harry Potter (character). For the film series, see Harry Potter (film series). For the franchise, see Wizarding World. For the universe, see Fictional universe of Harry Potter.')
const book2 = new Book('A Tale of Two Cities', 6000, 'For other uses, see A Tale of Two Cities (disambiguation)."The Golden Thread" redirects here. For the 1965 Indian film, see Subarnarekha (film).')
const book3 = new Book('The Little Prince', 8000, 'The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁɛ̃s]) is a novella written and illustrated by French writer and aviator Antoine de Saint-Exupéry.')
const book4 = new Book('The Alchemist', 16000, 'The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988. ')
const books = [book1.show(),book2.show(),book3.show(),book4.show()]
let maxBook = null

function Many() {
    books.forEach((book) => {
        if (maxBook) {
            if (book.price > maxBook.price) {
            maxBook = book
            }
        } else {
            maxBook = book
        }
    })    


}

Many()
console.log(maxBook);
console.log(books);


