function mt1(a: number, b: number, op: "cong"): number;
function mt1(a: number, b: number, op: "tru"): number;
function mt1(a: number, b: number, op: "nhan"): number;
function mt1(a: number, b: number, op: "chia"): number;

function mt1(a: number, b: number, op: string): number {
  switch (op) {
    case "cong": {
      return a + b;
    }
    case "tru": {
      return a - b;
    }
    case "nhan": {
      return a * b;
    }
    case "chia": {
      return a / b;
    }
    default: {
      throw new Error("Invalid operation");
    }
  }
}
console.log(mt1(5, 10, "cong"));

function calculateWithCallback1(
  x: number,
  y: number,
  op: "add" | "sub" | "mul" | "div",
  callback: (result: number) => void
) {
  let result: number;
  switch (op) {
    case "add":
      result = x + y;
      break;
    case "sub":
      result = x - y;
      break;
    case "mul":
      result = x * y;
      break;
    case "div":
      result = x / y;
      break;
    default:
      throw new Error("Invalid op");
  }
  callback(result);
}

calculateWithCallback1(10, 5, "mul", (res) => console.log("Result:", res));
