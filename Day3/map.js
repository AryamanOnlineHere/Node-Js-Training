const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output will be 1

map.set("a", 97);
console.log(map.get("a"));
// Expected output will be 97

console.log(map.size);
// Expected outputwill be 3

map.delete("b");
console.log(map.size);
// Expected output will be 2
