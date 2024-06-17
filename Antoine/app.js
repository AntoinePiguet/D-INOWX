const express = require("express");
const path = require("path");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const database = require("mime-db");
const connection = require("express-myconnection");
const app = express();

const optionBd = {
  host: "localhost",
  user: "root",
  password: "",
  port: 6033,
  database: "innoweeks",
};
const heureConnsectee = Date().toString();
const notes = [
  { titre: "Creation contenu", desc: "Bonjour" },
  { titre: "Notes", desc: "des notes de cours" },
];

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(myConnection(mysql, optionBd, "pool"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  req.getConnection((erreur, connection) => {
    if (erreur) {
      console.log(erreur);
    } else {
      connection.query(
        "SELECT * FROM t_username",
        [
          /*valeur*/
        ],
        (erreur, resultat) => {
          if (erreur) {
            console.log(erreur);
          } else {
            res.status(200).render("index", { resultat });
          }
        }
      );
    }
  });
  res.sendFile(path.join(__dirname, "index.html"));
});

app.set("port", process.env.PORT || 3000);
//Connexion port 3000
var server = http.listen(3000, () => {
  console.log("server is running on port", server.address().port);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
