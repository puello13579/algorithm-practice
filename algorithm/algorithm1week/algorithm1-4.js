let fruits = ["사과", "바나나"];

let [a, b] = ["맛있는" + fruits[0], "맛있는" + fruits[1]];

fruits.pop(0);
fruits.pop(1);

fruits.push(a);
fruits.push(b);

console.log(fruits);
//구조분해할당을 사용해서 "맛있는" 을 더해준다? //
