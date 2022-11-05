const month = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function days(month) {
  if (
    month === 1 ||
    month === 5 ||
    month === 3 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log(31);
  } else if (month === 2) {
    console.log(28);
  } else {
    console.log(30);
  }
}

days(12);
