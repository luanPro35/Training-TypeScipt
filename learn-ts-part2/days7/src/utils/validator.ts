import { Book } from "../models/book";
import { Member } from "../models/member";

export function isValidBook(book: Book): boolean {
  return (
    !!(book.id && book.author && book.title) ||
    typeof book.available === "boolean"
  );
}

export function isValidMember(member: Member): boolean {
  return !!(member.id && member.name);
}
