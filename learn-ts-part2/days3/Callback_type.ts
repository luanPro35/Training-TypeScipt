() => {
  function getUser(name: string, callback: (msg: string) => void) {
    const mess = `Hello, ${name}`;
    callback(mess);
  }
  getUser("Luan", (msg) => console.log(msg));
};
