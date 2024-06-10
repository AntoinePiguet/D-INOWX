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

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Pour afficher la page HEALTH
btnHealth.addEventListener("click", () => {
  main.innerHTML = divHealth;
  i.style.backgroundColor = `#465dc0`;
  o.style.backgroundColor = `transparent`;
  u.style.backgroundColor = `transparent`;
  y.style.backgroundColor = `transparent`;
  a.style.backgroundColor = `transparent`;
});

//Pour afficher la page HOME
btnHome.addEventListener("click", () => {
  main.innerHTML = divHome;
  o.style.backgroundColor = `#465dc0`;
  i.style.backgroundColor = `transparent`;
  u.style.backgroundColor = `transparent`;
  y.style.backgroundColor = `transparent`;
  a.style.backgroundColor = `transparent`;
});

//Pour afficher la page TEXTS
btnTexts.addEventListener("click", () => {
  main.innerHTML = divTexts;
  u.style.backgroundColor = `#465dc0`;
  o.style.backgroundColor = `transparent`;
  i.style.backgroundColor = `transparent`;
  y.style.backgroundColor = `transparent`;
  a.style.backgroundColor = `transparent`;
});

//Pour afficher la page USER
btnUser.addEventListener("click", () => {
  main.innerHTML = divUser;
  y.style.backgroundColor = `#465dc0`;
  o.style.backgroundColor = `transparent`;
  u.style.backgroundColor = `transparent`;
  i.style.backgroundColor = `transparent`;
  a.style.backgroundColor = `transparent`;
});

//Pour afficher la page AMBULANCE
btnAmbulance.addEventListener("click", () => {
  main.innerHTML = divAmbulance;
  a.style.backgroundColor = `#465dc0`;
  o.style.backgroundColor = `transparent`;
  u.style.backgroundColor = `transparent`;
  y.style.backgroundColor = `transparent`;
  i.style.backgroundColor = `transparent`;
});

//Pour afficher la page SETTINGS
btnSettings.addEventListener("click", () => {
  main.innerHTML = divSettings;
  btnSettings.style.backgroundColor = ` white`;
  btnSettings.style.borderRadius = `60%`;
  let btnNuit = document.createElement("button");
  btnNuit.id = "nuit";
  btnNuit.textContent = "Mode BRESOM";
  main.appendChild(btnNuit);

  //Pour activer le mode sombre
  btnNuit.addEventListener("click", () => {
    main.style.backgroundColor = `black`;
    btnNuit.style.backgroundColor = `black`;
    main.style.color = `white`;
  });
});

if (
  button.addEventListener("click", () => {
    for (let z = 0; z < 6; z++) {
      if( button == )
    }
  })
);
