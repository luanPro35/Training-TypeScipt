"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function ProductDetailPage() {
  // Lấy slug từ URL
  const { slug } = useParams();

  // Lấy query string từ URL
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const size = searchParams.get("size");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chi tiết sản phẩm</h1>
      <p>
        <strong>Product:</strong> {slug}
      </p>
      <p>
        <strong>Color:</strong> {color}
      </p>
      <p>
        <strong>Size:</strong> {size}
      </p>
    </main>
  );
}
