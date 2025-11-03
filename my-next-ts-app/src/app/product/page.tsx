"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState("");

  // Fetch danh sách sản phẩm
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Gửi sản phẩm mới
  const addProduct = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newProduct }),
    });
    const data = await res.json();
    setProducts([...products, data]);
    setNewProduct("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
      <ul className="space-y-2 mt-4">
        {products.map((p) => (
          <li key={p.id} className="border p-2">
            {p.name}
          </li>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Tên sản phẩm"
          className="border p-2"
        />
        <button
          onClick={addProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm
        </button>
      </div>
    </div>
  );
}
