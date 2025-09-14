interface ProductProps {
  params: { slug: string };
}

export default async function ProductDetail({ params }: ProductProps) {
  await params;
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Chi tiết sản phẩm</h1>
      <p>Bạn đang xem sản phẩm có slug = {params.slug}</p>
    </main>
  );
}
