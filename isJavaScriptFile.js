function isJavaScriptFile(filename) {
  if (typeof filename !== "string") {
    console.log("please enter valid file name");
  } else {
    return filename.toLowerCase().endsWith(".js");
  }
}

console.log(isJavaScriptFile("j.js"));
