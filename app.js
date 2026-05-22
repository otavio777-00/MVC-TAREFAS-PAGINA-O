const express = require("express");
const app = express();
require("dotenv").config();

const basePort = parseInt(process.env.APP_PORT || process.env.PORT || 3000, 10);
const maxPortRetries = 10;

app.use(express.static("app/public"));
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var rotas = require("./app/routes/router");
app.use("/", rotas);

function startServer(port, attempt = 0) {
  if (attempt > maxPortRetries) {
    console.error(`Não foi possível iniciar o servidor após ${maxPortRetries + 1} tentativas.`);
    process.exit(1);
  }

  const server = app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}\nhttp://localhost:${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`Porta ${port} em uso. Tentando porta ${port + 1}...`);
      startServer(port + 1, attempt + 1);
    } else {
      console.error("Erro ao iniciar o servidor:", err);
      process.exit(1);
    }
  });
}

startServer(basePort);



