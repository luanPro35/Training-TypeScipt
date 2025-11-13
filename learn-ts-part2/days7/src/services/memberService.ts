import { Member } from "../models/member";
import { isValidMember } from "../utils/validator";
import { BookService } from "./bookService";

export class MemberService {
  private members: Member[] = [];
  private bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  addMember(member: Member): string {
    if (!isValidMember(member)) {
      console.error("Invalid member data.");
      return "Invalid member data.";
    }
    this.members.push(member);
    return "Member added successfully.";
  }

  getAllMember(): Member[] {
    return this.members;
  }

  borrowBook(memberId: string, bookId: string): string {
    const member = this.members.find((m) => m.id === memberId);
    if (!member) {
      return "Member not found.";
    }
    if (member.borrowedBooks.includes(bookId)) {
      return "Book already borrowed by this member.";
    }
    member.borrowedBooks.push(bookId);
    return "Book borrowed successfully.";
  }

  returnBook(memberId: string, bookId: string): string {
    const member = this.members.find((m) => m.id === memberId);
    if (!member) {
      return "Member not found.";
    }

    const bookIndex = member.borrowedBooks.indexOf(bookId);
    if (bookIndex === -1) {
      return "Book not borrowed by this member.";
    }

    member.borrowedBooks.splice(bookIndex, 1);
    return "Book returned successfully.";
  }

  findBookById(bookId: string): string {
    const book = this.bookService.getBookById(bookId);
    if (!book) {
      return "Book not found.";
    }
    return book.title;
  }
}
