enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
}

let orderStatus: OrderStatus = OrderStatus.Pending;
if (orderStatus === OrderStatus.Pending) {
  console.log("Đơn hàng đang chờ xử lý");
} else if (orderStatus === OrderStatus.Shipped) {
  console.log("Đơn hàng đã được gửi đi");
} else if (orderStatus === OrderStatus.Delivered) {
  console.log("Đơn hàng đã được giao");
} else if (orderStatus === OrderStatus.Cancelled) {
  console.log("Đơn hàng đã bị hủy");
} else {
  console.log("Đơn hàng bị lỗi");
}

enum Role {
  Admin,
  Editor,
  Viewer,
}

function checkPerMission(role: Role) {
  if (role === Role.Admin) {
    console.log("Toàn quyền");
  } else if (role === Role.Editor) {
    console.log("Được chỉnh sửa");
  } else if (role === Role.Viewer) {
    console.log("Chỉ được xem");
  } else {
    console.log("Quyền không hợp lệ");
  }
}

checkPerMission(Role.Admin);

enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}

let taskPriority = Priority.High;

console.log(taskPriority);

enum OrderStatuss {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

function getOrderMessage(status: OrderStatuss): string {
  switch (status) {
    case OrderStatuss.Pending:
      return "Đơn hàng đang chờ xử lý";
    case OrderStatuss.Shipped:
      return "Đơn hàng đã được gửi đi";
    case OrderStatuss.Delivered:
      return "Đơn hàng đã được giao";
    case OrderStatuss.Cancelled:
      return "Đơn hàng đã bị hủy";
    default:
      return "Trạng thái không hợp lệ";
  }
}

console.log(getOrderMessage(OrderStatuss.Pending));
console.log(getOrderMessage(OrderStatuss.Shipped));
console.log(getOrderMessage(OrderStatuss.Delivered));
console.log(getOrderMessage(OrderStatuss.Cancelled));

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      return "Đang di chuyển lên";
    case Direction.Down:
      return "Đang di chuyển xuống";
    case Direction.Left:
      return "Đang di chuyển sang trái";
    case Direction.Right:
      return "Đang di chuyển sang phải";
    default:
      return "Hướng di chuyển không hợp lệ";
  }
}

console.log(move(Direction.Left));

enum TaskStatus {
  Todo = "TODO",
  InProgress = "IN_PROGRESS",
  Done = "DONE",
}

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let task: Task[] = [];

function addTask(title: string): void {
  const newTask: Task = {
    id: task.length + 1,
    title: title,
    status: TaskStatus.Todo,
  };
  task.push(newTask);
}

function updateTaskStatus(id: number, newStatus: TaskStatus): void {
  const taskToUpdate = task.find((t) => t.id === id);
  if (taskToUpdate) {
    taskToUpdate.status = newStatus;
  } else {
    console.log("Không tìm thấy task");
  }
}

function printTasks(): void {
  task.forEach((task) => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
  });
}

addTask("Học TypeScript enum");
addTask("Làm bài tập enum nâng cao");
addTask("Code mini project quản lý Task");

updateTaskStatus(2, TaskStatus.InProgress);
updateTaskStatus(3, TaskStatus.Done);

printTasks();

interface Student {
  name: string;
  age: number;
  isGraduated: boolean;
}

let student1: Student = {
  name: "Nguyễn Văn A",
  age: 20,
  isGraduated: false,
};

console.log(student1);
