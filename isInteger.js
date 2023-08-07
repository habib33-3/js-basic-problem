function isInteger(number) {
  if (typeof number !== "number") {
    console.log("please enter a valid number");
  } else {
    return number % 1 === 0;
  }
}

console.log(isInteger(5));
