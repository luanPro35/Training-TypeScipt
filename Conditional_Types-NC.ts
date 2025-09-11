type IsNumber<T> = T extends number ? "yes" : "no";
type Something = unknown;
type ExtractNumber<T> = T extends number ? Something : never;
type Flatten<T> = T extends Array<Something> ? Something : T;

type A = IsNumber<number>; // "yes"
type B = IsNumber<string>; // "no"

type C = ExtractNumber<string[]>; // string
type D = ExtractNumber<number>; // never

type E = Flatten<string[]>; // string
type F = Flatten<boolean>; // boolean
