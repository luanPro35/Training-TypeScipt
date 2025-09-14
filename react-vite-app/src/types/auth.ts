export type LoginForm = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  isAdmin: boolean;
};

export type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface RegisterFormProps {
  onRegisterSuccess: (user: User) => void;
}

export interface LoginFormProps {
  onLoginSuccess: (user: User) => void;
}
