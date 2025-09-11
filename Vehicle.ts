interface Car {
  brand: string;
  speed: number;
}

interface Bike {
  brand: string;
  hasPedals: boolean;
}

type Vehicle = Car | Bike;

function isCar(vehicle: Vehicle): vehicle is Car {
  return (vehicle as Car).speed !== undefined;
}

function isBike(vehicle: Vehicle): vehicle is Bike {
  return (vehicle as Bike).hasPedals !== undefined;
}

function getVehicleDetails(vehicle: Vehicle) {
  if (isCar(vehicle)) {
    console.log(
      `This is a car. Brand: ${vehicle.brand}, Speed: ${vehicle.speed} km/h`
    );
  } else if (isBike(vehicle)) {
    console.log(
      `This is a bike. Brand: ${vehicle.brand}, Has Pedals: ${
        vehicle.hasPedals ? "Yes" : "No"
      }`
    );
  } else {
    console.log("Unknown vehicle type.");
  }
}

// Example Usage:
const myCar: Car = { brand: "Toyota", speed: 120 };
const myBike: Bike = { brand: "Trek", hasPedals: true };
const anotherBike: Bike = { brand: "BMX", hasPedals: false };

getVehicleDetails(myCar);
getVehicleDetails(myBike);
getVehicleDetails(anotherBike);

// What if it's not a Car or a Bike?
// In this specific example, the `Vehicle` type is a union of `Car | Bike`,
// so it *must* be one of them. The `else` block for "Unknown vehicle type"
// would only be reachable if `Vehicle` could be other types, or if the type guards
// were not exhaustive. For instance, if we had:
// type Vehicle = Car | Bike | Truck;
// and `getVehicleDetails` only checked for `Car` and `Bike`, then `Truck` would fall into the `else` block.
