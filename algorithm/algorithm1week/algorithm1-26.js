const array = ["a", "b", "c"];

array.forEach((data, index) => {
  console.log(data, index);
});

//foreach는 콜백함수를 사용해서 배열의 각 요소를 불러와 작업할 수 있다. 그리고 break 등이 안된다. 하지만 끊어지는 것처럼 할 수 있다.

const arr = ["a", "b", "c", "d"];

let able = false;
arr.forEach((data, index) => {
  if (able === false) {
    if (index === 3) {
      able = true;
    }
    console.log(data, index);
  }
});

//able이 false일때만 data, index값이 보여지도록 설정해 두었는데 index가 3이 되면 true로 바뀌기 때문에 그 이후의 값들은 출력되도록 작동할 수 없는 것이다.
