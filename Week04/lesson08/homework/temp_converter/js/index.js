function convert () {
var f;
var c = 20;

document.getElementById("#fahrenheit").value = fahrenheit;
document.getElementById("#celsius").value = celsius;

  if (f = c*9/5+32) {
    convert = "#celsius";
  } else if (c = f-32*5/9) {
    convert = "#fahrenheit";
}

document.querySelector("#convert").onclick = convert;
document.querySelector("#clear").onclick = clear;
