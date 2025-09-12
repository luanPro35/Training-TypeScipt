import type { LoginForm, User, LoginFormProps } from "../types/auth.js";
import React, { useState } from "react";

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Basic validation
    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    // Simulate login attempt (replace with actual API call)
    // For demonstration, let's assume a successful login if email is 'test@example.com' and password is 'password'
    if (form.email === "test@example.com" && form.password === "password") {
      const mockUser: User = { id: 1, email: form.email, isAdmin: false }; // Assuming User has id and email
      onLoginSuccess(mockUser);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
