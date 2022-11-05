const obj = {
  name: "훈이",
  age: 12,
};

for (let data in obj) {
  console.log(data, obj[data]);
}

//for in은 객체의 키값을 불러올때 쓸 수 있다. 이때 let 다음에 나오는 변수명은 스스로 정해줄 수 있고 키값은 data를 통해서 담기며 그 값은 obj[data]를 통해 불러올 수 있게 된다.
