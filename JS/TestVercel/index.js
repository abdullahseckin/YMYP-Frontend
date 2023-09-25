const express = require("express");
const app = express();

app.use(express.json());

// Ana sayfa endpointi
app.get("/", (req, res) => {
  res.json({ message: "API Çalışıyor" });
});

// API rotalarını tanımla
const api = express.Router();

api.get("/get", (req, res) => {
  res.json({ message: "GET isteği başarılı" });
});

api.post("/post", (req, res) => {
  res.json({ message: "POST isteği başarılı" });
});

// Tüm rotalar 'api' öneki ile başlar
app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} üzerinde çalışıyor.`);
});

// Vercel için önemli: Express nesnesini dışarıya aktar
module.exports = app;
