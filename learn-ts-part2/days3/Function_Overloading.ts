() => {
  function result(a: number, b: number): number;
  function result(a: string, b: string): string;
  function result(a: any, b: any): any {
    return a + b;
  }

  console.log(result(5, 10));
  console.log(result("Luan", "Le"));
};
