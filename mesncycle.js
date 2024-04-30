let msg = document.getElementById("text");
let lightmodeImg = document.getElementById("lightmode");
let darkmodeImg = document.getElementById("darkmode");
let presentTime = new Date();
let presentHour = presentTime.getHours();
let presentMinutes = presentTime.getMinutes();
let presentSeconds = presentTime.getSeconds();

if (presentHour >= 19 || presentHour < 7) {
  darkmodeImg.style.display = "block";
  lightmodeImg.style.display = "none";
  document.body.style.background = "black";
  document.body.style.color = "white";
} else {
  darkmodeImg.style.display = "none";
  lightmodeImg.style.display = "block";
  document.body.style.background = "white";
  document.body.style.color = "black";
}
console.log(presentHour);
console.log(`${presentHour}:${presentMinutes}:${presentSeconds}`);
setTimeout(function () {
  window.location.href = "mensignup.html";
}, 6000);
