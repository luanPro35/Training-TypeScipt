export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <h2 className="text-xl font-semibold mb-4">About Section</h2>
      <div className="border p-4 rounded bg-white">{children}</div>
    </div>
  );
}
