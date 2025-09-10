interface Service {
  id: number;
  name: string;
  duration: number; // phút
}

function updateServiceField<K extends Exclude<keyof Service, "id">>(
  serviceObj: Service,
  field: K,
  value: Service[K]
): Service {
  return {
    ...serviceObj,
    [field]: value,
  };
}

let s: Service = { id: 1, name: "Cleaning", duration: 60 };

// ✅ Update name
s = updateServiceField(s, "name", "Premium Cleaning");

// ✅ Update duration
s = updateServiceField(s, "duration", 90);

// ❌ Không được phép update id
// s = updateServiceField(s, "id", 99);

console.log(s);
