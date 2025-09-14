export default function BlogList() {
  const blogs = [
    { id: "1", title: "Bài viết đầu tiên" },
    { id: "2", title: "Next.js thật tuyệt" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Danh sách Blog</h1>
      <ul className="list-disc pl-5 mt-3">
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} (ID: {blog.id})
          </li>
        ))}
      </ul>
    </main>
  );
}
