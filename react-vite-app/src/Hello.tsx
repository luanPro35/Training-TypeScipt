// components/UserCard.tsx
import type { User } from "./types";

interface UserCardProps {
  user: User;
}

function Hello({ user }: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "8px",
        borderRadius: "8px",
      }}
    >
      <h2>
        {user.name}{" "}
        {user.isAdmin && <span style={{ color: "red" }}>Admin</span>}
      </h2>
      <p>{user.email}</p>
    </div>
  );
}

export default Hello;
