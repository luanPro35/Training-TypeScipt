export type LoginForm = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  isAdmin: boolean;
};

export interface LoginFormProps {
  onLoginSuccess: (user: User) => void;
}
