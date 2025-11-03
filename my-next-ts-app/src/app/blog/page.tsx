type Post = {
  id: number;
  title: string;
};

export default async function BlogPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded">
            <a
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
