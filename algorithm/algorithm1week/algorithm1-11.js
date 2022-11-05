let array = [];
let object = {};

console.log(typeof array);
console.log(typeof object);

//왜 typeof로는 정확하게 잡히지 않는걸까? //

console.log(Array.isArray(array));
console.log(Array.isArray(object));
