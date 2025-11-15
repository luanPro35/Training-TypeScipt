import { BookService } from "./services/bookService";
import { MemberService } from "./services/memberService";

// === Khởi tạo service ===
const bookService = new BookService();
const memberService = new MemberService(bookService);

// === 1️⃣ Thêm sách ===
bookService.addBook({
  id: "1",
  title: "Clean Code",
  author: "Robert C. Martin",
  available: true,
});
bookService.addBook({
  id: "2",
  title: "TypeScript Handbook",
  author: "Microsoft",
  available: true,
});
bookService.addBook({
  id: "3",
  title: "Design Patterns",
  author: "GoF",
  available: true,
});
bookService.addBook({
  id: "4",
  title: "Refactoring",
  author: "Martin Fowler",
  available: true,
});

console.log("📚 Danh sách sách sau khi thêm:");
console.log(bookService.getBooks());

// === 2️⃣ Mượn & trả sách ===
console.log("\n📖 Luân mượn sách ID = 2 (TypeScript Handbook)");
memberService.addMember({ id: "m1", name: "Luân", borrowedBooks: [] });
memberService.addMember({ id: "m2", name: "Lâm", borrowedBooks: [] });

memberService.borrowBook("m1", "2"); // Luân mượn
console.log("\n📚 Sau khi mượn:");
console.log(bookService.getBooks());

memberService.returnBook("m1", "2");
console.log("\n📗 Sau khi trả sách:");
console.log(bookService.getBooks());
console.log("\n📕 Lấy sách theo ID = 3:");
console.log(bookService.getBookById("3"));

console.log("\n👤 Danh sách thành viên:");
console.log(memberService.getAllMember());
