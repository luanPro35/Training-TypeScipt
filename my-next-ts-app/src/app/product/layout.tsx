import Link from "next/link";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar riêng cho Products */}
      <aside className="w-48 bg-gray-100 p-4 space-y-2">
        <h2 className="font-bold mb-2">Danh mục</h2>
        <ul className="space-y-1">
          <li>
            <Link href="/products">Tất cả</Link>
          </li>
          <li>
            <Link href="/products?category=electronics">Điện tử</Link>
          </li>
          <li>
            <Link href="/products?category=fashion">Thời trang</Link>
          </li>
        </ul>
      </aside>

      {/* Nội dung chính */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
