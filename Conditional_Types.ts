type OnlyFunction<T> = T extends (...args: any[]) => any ? T : never;

type A = OnlyFunction<
  string | (() => void) | number | ((id: number) => string)
>;

let fn1: A = () => console.log("Hello");
fn1 = (id: number) => `ID: ${id}`;
