(function () {
  let user: {
    name: string;
    age: number;
    isAdmnin: boolean;
  };
  user = {
    name: "Luan",
    age: 30,
    isAdmnin: true,
  };
  console.log(user);
})();

(function () {
  type User = {
    name: string;
    age?: number;
    address: string;
  };
  const user: User = {
    name: "Luan",
    address: "Hoi An",
  };
  console.log(user);
})();
