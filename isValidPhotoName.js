function isValidPhotoName(photoName, imageExtensions) {
  if (typeof photoName !== "string" || !Array.isArray(imageExtensions)) {
    return "Please enter valid photo name or extensions";
  }
  for (const element of imageExtensions) {
    if (photoName.toLowerCase().endsWith(element.toLowerCase())) {
      return true;
    } 
  }
  return false;
}
const arr = [".jpg", ".jpeg", ".png", ".gif", ".ico", ".JPEG"];

let photoName = "j.ico";

console.log(isValidPhotoName(photoName, arr));
