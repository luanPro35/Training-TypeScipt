interface BlogProps {
  params: { id: string };
}

export default function BlogPost({ params }: BlogProps) {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Blog chi tiết</h1>
      <p>Bạn đang xem bài viết có ID = {params.id}</p>
    </main>
  );
}
