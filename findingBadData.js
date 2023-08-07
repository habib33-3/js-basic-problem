function findBadData(arr) {
  if (!Array.isArray(arr)) {
    // console.log("Please enter a array");
    return "Please enter a array";
  } else {
    let count = 0;
    for (const element of arr) {
      if (typeof element !== "number") {
        // console.log("please enter valid number");
        return "please enter valid number";
      } else {
        if (element < 0) {
          count++;
        }
      }
    }
    return count;
  }
}

let arr = [3, 4, 5, -2, 6, -6, 5];

console.log(findBadData(arr));
console.log(findBadData(3));
