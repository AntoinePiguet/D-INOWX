//Les variables :
let btnHealth = document.getElementById("health");
let btnHome = document.getElementById("home");
let btnTexts = document.getElementById("texts");
let btnUser = document.getElementById("user");
let btnAmbulance = document.getElementById("ambulance");
let btnSettings = document.getElementById("set");
let main = document.querySelector("main");
let button = document.querySelectorAll("button");
var i = document.getElementById(`box4`);
var u = document.getElementById(`box3`);
var o = document.getElementById(`box2`);
var y = document.getElementById(`box1`);
var a = document.getElementById(`box0`);
let z = 0;
let buttonList = [
  btnAmbulance,
  btnUser,
  btnHome,
  btnTexts,
  btnHealth,
  btnSettings,
];
let boxList = [a, y, o, u, i];
let divList = [
  divSettings,
  divAmbulance,
  divUser,
  divHome,
  divTexts,
  divHealth,
];
///////////////////////////////////////////////////////////////////////////////////////////////////////

button.forEach((button, z) => {
  button.addEventListener("click", () => {
    main.innerHTML = divList[z];
    boxList.forEach((box) => {
      box.style.backgroundColor = "transparent";
    });
    boxList[z - 1].style.backgroundColor = `#465dc0`;
  });
});
