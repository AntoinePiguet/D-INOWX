//Les variables :
let btnHealth = document.getElementById("health");
let btnHome = document.getElementById("home");
let btnTexts = document.getElementById("texts");
let btnUser = document.getElementById("user");
let btnAmbulance = document.getElementById("ambulance");
let main = document.querySelector("main");

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Pour afficher la page HEALTH
btnHealth.addEventListener("click", () => {
  main.innerHTML = divHealth;
});

//Pour afficher la page HOME
btnHome.addEventListener("click", () => {
  main.innerHTML = divHome;
});

//Pour afficher la page TEXTS
btnTexts.addEventListener("click", () => {
  main.innerHTML = divTexts;
});

//Pour afficher la page USER
btnUser.addEventListener("click", () => {
  main.innerHTML = divUser;
});

//Pour afficher la page AMBULANCE
btnAmbulance.addEventListener("click", () => {
  main.innerHTML = divAmbulance;
});
