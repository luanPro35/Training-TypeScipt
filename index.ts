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
