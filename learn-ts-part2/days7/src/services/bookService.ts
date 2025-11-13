import { Book } from "../models/book";
import { isValidBook } from "../utils/validator";

export class BookService {
  private books: Book[] = [];

  addBook(book: Book): boolean {
    if (!isValidBook(book)) {
      console.error("Invalid book data.");
      return false;
    }
    this.books.push(book);
    return true;
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  updateBook(id: string, updatedBook: Partial<Book>): boolean {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      console.error(`Book with ID ${id} not found.`);
      return false;
    }
    this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
    return true;
  }

  returnBook(BookId: string): string {
    const book = this.books.find((b) => b.id === BookId);
    if (!book) {
      return "Book not found.";
    }
    return "Book returned successfully.";
  }
}
