// app/api/products/route.ts
import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung Galaxy S24" },
];

// GET: Lấy danh sách sản phẩm
export async function GET() {
  return NextResponse.json(products);
}

// POST: Thêm sản phẩm mới
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = {
    id: Date.now(),
    name: body.name,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
