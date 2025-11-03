(() => {
  let name: string = "Luan";
  let age: number = 10;
  let admin: boolean = true;
  let a: null = null;
  let b: undefined = undefined;
  let value: any;
  let c: unknown;
  function log(): void {
    console.log(name, age, admin, a, b, value, c);
  }

  log();
})();

(() => {
  let result: number | undefined;
  const namesArray: string[] = ["Luan", "Lam", "Loi"];
  function findName(searchName: string): number | undefined {
    const index = namesArray.indexOf(searchName);
    if (index !== -1) {
      return index + 101;
    }
    return undefined;
  }

  result = findName("Hai");
  console.log(result);
})();
