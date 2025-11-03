import "./globals.css";
import NewPage from "./news/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* NavBar */}
        <header className="bg-white shadow p-4 flex gap-4">
          <NewPage />
        </header>

        {/* Nội dung chính */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center text-sm mt-10">
          © {new Date().getFullYear()} Mini Blog Demo
        </footer>
      </body>
    </html>
  );
}
