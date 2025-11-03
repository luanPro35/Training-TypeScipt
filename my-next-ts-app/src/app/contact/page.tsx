"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, message });
    alert("Gửi thành công! Xem console để thấy dữ liệu.");
    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liên hệ</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md bg-white p-4 rounded shadow"
      >
        <div>
          <label className="block mb-1">Tên</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Nội dung</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Gửi
        </button>
      </form>
    </main>
  );
}
