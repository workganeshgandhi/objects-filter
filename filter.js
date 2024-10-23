const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" },
  { name: "David", age: 40, city: "Houston" },
  { name: "Eve", age: 28, city: "Miami" }
];

const obj2 = objects.filter(obj => obj.age > 30);

console.log(obj2);
