function mindGame(x) {
  if (typeof x != "number") {
    console.log("please enter a number");
  } else if (x <= 0) {
    console.log("please enter a positive number");
  } else {
    const result = (x * 3 + 10) / 2 - 5;
    return result;
  }
}


console.log(mindGame(5));