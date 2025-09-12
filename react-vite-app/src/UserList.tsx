import type { User } from "./types";
import Hello from "./Hello";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <Hello key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
