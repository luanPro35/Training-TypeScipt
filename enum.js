var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
let orderStatus = OrderStatus.Pending;
if (orderStatus === OrderStatus.Pending) {
    console.log("Đơn hàng đang chờ xử lý");
}
else if (orderStatus === OrderStatus.Shipped) {
    console.log("Đơn hàng đã được gửi đi");
}
else if (orderStatus === OrderStatus.Delivered) {
    console.log("Đơn hàng đã được giao");
}
else if (orderStatus === OrderStatus.Cancelled) {
    console.log("Đơn hàng đã bị hủy");
}
else {
    console.log("Đơn hàng bị lỗi");
}
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
function checkPerMission(role) {
    if (role === Role.Admin) {
        console.log("Toàn quyền");
    }
    else if (role === Role.Editor) {
        console.log("Được chỉnh sửa");
    }
    else if (role === Role.Viewer) {
        console.log("Chỉ được xem");
    }
    else {
        console.log("Quyền không hợp lệ");
    }
}
checkPerMission(Role.Admin);
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
let taskPriority = Priority.High;
console.log(taskPriority);
var OrderStatuss;
(function (OrderStatuss) {
    OrderStatuss["Pending"] = "PENDING";
    OrderStatuss["Shipped"] = "SHIPPED";
    OrderStatuss["Delivered"] = "DELIVERED";
    OrderStatuss["Cancelled"] = "CANCELLED";
})(OrderStatuss || (OrderStatuss = {}));
function getOrderMessage(status) {
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
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
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Todo"] = "TODO";
    TaskStatus["InProgress"] = "IN_PROGRESS";
    TaskStatus["Done"] = "DONE";
})(TaskStatus || (TaskStatus = {}));
let task = [];
function addTask(title) {
    const newTask = {
        id: task.length + 1,
        title: title,
        status: TaskStatus.Todo,
    };
    task.push(newTask);
}
function updateTaskStatus(id, newStatus) {
    const taskToUpdate = task.find((t) => t.id === id);
    if (taskToUpdate) {
        taskToUpdate.status = newStatus;
    }
    else {
        console.log("Không tìm thấy task");
    }
}
function printTasks() {
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
let student1 = {
    name: "Nguyễn Văn A",
    age: 20,
    isGraduated: false,
};
console.log(student1);
export {};
//# sourceMappingURL=enum.js.map