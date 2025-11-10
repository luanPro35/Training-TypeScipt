function kilo<T>(value: T): T {
  return value;
}

console.log(kilo<number>(456));

function bao<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

console.log(bao<string, number>("hello", 789));
