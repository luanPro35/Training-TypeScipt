export default function ProductList() {
  const products = [
    { slug: "iphone", name: "iPhone 14 Pro" },
    { slug: "macbook", name: "MacBook Pro 16" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Danh sách Sản phẩm</h1>
      <ul className="list-disc pl-5 mt-3">
        {products.map((p) => (
          <li key={p.slug}>
            {p.name} (slug: {p.slug})
          </li>
        ))}
      </ul>
    </main>
  );
}
