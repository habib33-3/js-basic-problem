function isLGSeven(n) {
  let result = n - 7;

  if (typeof n !== "number") {
    console.log("please enter a valid number");
  } else {
    if (result < 7) {
      return result;
    } else {
      return n * 2;
    }
  }
}


console.log(isLGSeven(-15));