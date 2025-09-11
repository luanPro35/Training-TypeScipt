interface Car {
  kind: "car";
  brand: string;
  number: string;
}

interface Bike {
  kind: "bike";
  brand: string;
  hasPedals: boolean;
}

function printVehicleInfo(vehicle: Car | Bike) {
  if (vehicle.kind === "car") {
    console.log(vehicle.brand, vehicle.number);
  } else {
    console.log(vehicle.brand, vehicle.hasPedals);
  }
}

class Circle {
  kind: "circle" = "circle";
  constructor(public radius: number) {}
}

class Retangle {
  kind: "retangle" = "retangle";
  constructor(public width: number, public height: number) {}
}

type Shape = Circle | Retangle;
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "retangle") {
    return shape.width * shape.height;
  }
}

interface Video {
  kind: "video";
  title: string;
  duration: number;
}

interface Image {
  kind: "image";
  title: string;
  resolution: string;
}

interface Audio {
  kind: "audio";
  title: string;
  bitrate: number;
}

type Media = Video | Image | Audio;
function printMediaInfo(Media: Media) {
  if (Media.kind === "video") {
    console.log(Media.title, Media.duration);
  } else if (Media.kind === "image") {
    console.log(Media.title, Media.resolution);
  } else {
    console.log(Media.title, Media.bitrate);
  }
}
