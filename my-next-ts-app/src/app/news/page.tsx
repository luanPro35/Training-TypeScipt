interface Post {
  id: number;
  title: string;
  body: string;
}

export const dynamic = "force-dynamic";
export default async function NewPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
    {
      cache: "no-store",
    }
  );

  const posts: Post[] = await res.json();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
