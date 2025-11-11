type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<number>;
type B = IsString<string>;

type repo<T> = T extends { data: infer R } ? R : never;
type API = { data: { id: string; name: string } };
type Result = repo<API>;
