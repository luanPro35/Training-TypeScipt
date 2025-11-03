interface ApiResponse {
  status: number;
  message: string;
  data: object;
  error?: string;
}

type OptionalExcept<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]?: T[P];
} & {
  [P in K]: T[P];
};

type SafeApiResponse = OptionalExcept<ApiResponse, "status" | "message">;

const ok: SafeApiResponse = {
  status: 200,
  message: "Success",
}; // ✅ hợp lệ
