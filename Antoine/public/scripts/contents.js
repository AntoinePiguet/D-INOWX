//Page Texts ////////////////////////////////////////////////////////////////////////////////////
function pageTexts() {
  const contenuDivTexts = " Tout le contenu de la page des messages";
  const divTexts = `
    <ul id="messages"></ul>    
    <form id="form" action="">      
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
    
  `;

  return divTexts;
}

//Page Health ////////////////////////////////////////////////////////////////////////////////
function pageHealth() {
  const contenuDivHealth = "La page pour les analyses de santé etc...";
  const divHealth = contenuDivHealth;

  return divHealth;
}

//Page Home //////////////////////////////////////////////////////////////////////////////////
function pageHome() {
  const divHome = `
          <div class="gridContent">
            <div class="box one">Sant-E A</div>
            <div class="box two">page d'accueil.</div>
            <div class="box three">Aucune maj</div>
            <div class="box four">Recommandations</div>
            <div class="box five">Alimentation</div>
            <div class="box six">Hydratation</div>
          </div>
  `;

  return divHome;
}
//Page User //////////////////////////////////////////////////////////////////////////////////
function pageUser() {
  const contenuDivUser = "Les informations du compte user";
  const divUser = contenuDivUser;

  return divUser;
}

//Page Ambulance //////////////////////////////////////////////////////////////////////////////////
function pageAmbulance() {
  const contenuDivAmbulance = "les secours";
  const divAmbulance = contenuDivAmbulance;

  return divAmbulance;
}

//Page Settings ////////////////////////////////////////////////////////////////////////////////////
function pageSettings() {
  const divSettings = `phallène`;

  return divSettings;
}
