import { useState } from "react";
import LoginForm from "./components/LoginForm";
import type { User } from "./types/auth";
const App = () => {
  const [user, setUser] = useState<User | null>(null);
  if (user) {
    return <h1>Welcome, {user.email}</h1>;
  }
  return (
    <div>
      <LoginForm onLoginSucces={setUser}></LoginForm>
    </div>
  );
};
export default App;
