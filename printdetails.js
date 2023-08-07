function printDetails(obj) {
  if (typeof obj !== "object") {
    console.log("Please enter a objects");
  } else {
    const name = obj.name || "nai";
    const age = obj.age || "nai";
    const email = obj.email || "nai";
    const kaj = obj.kaj || "nai";

    return (
      "amar nam " +
      name +
      ". amr boyos " +
      age +
      ". amar email " +
      email +
      ". amar kaj " +
      kaj +
      "."
    );
  }
}

const obj = {
  name: "jack",
  age: 26,
  email: "abc@gmail.com",
};

console.log(printDetails(obj));
