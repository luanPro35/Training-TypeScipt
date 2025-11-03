type PageProps = {
  params: { slug: string };
};

export default function SanPhamDetail({ params }: PageProps) {
  return (
    <main>
      <h1 className="text-2xl font-bold">Chi tiết Sản phẩm</h1>
      <p>Bạn đang xem sản phẩm: {params.slug}</p>
    </main>
  );
}
