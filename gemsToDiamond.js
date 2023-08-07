function gemsToDiamond(x, y, z) {
  let totalDiamond = x * 21 + y * 32 + z * 43;

  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    console.log("enter valid data");
  } else {
    let diamond;
    if (totalDiamond > 2000) {
      diamond = totalDiamond - 2000;
    } else {
      diamond = totalDiamond;
    }
    return diamond;
  }
}

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
