type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type FirstElement<T> = T extends Array<infer First> ? First : never;
type PromiseValue<T> = T extends Promise<infer U> ? U : T;
type A = ReturnTypeOf<() => number>; // number
type B = ReturnTypeOf<string>; // never

type C = FirstElement<[string, number, boolean]>; // string
type D = FirstElement<number[]>; // number
type E = FirstElement<boolean>; // never

type F = PromiseValue<Promise<string>>; // string
type G = PromiseValue<number>; // number

