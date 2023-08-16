const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
class GlobalStore {
  static allowedIps = new Map();
}
const secret_path_router = express.Router();


secret_path_router.get("/:secret_path_id", (req, res) => {
  console.log(`[*] Client IP: ${req.ip}`);
  res.render("index", {
    pageTitle: "My Secret",
    yourIP: req.ip
  });
});

app.get("/new-secret", (req, res) => {
  const yourIP = req.ip;
  res.render("create", { yourIP });
});

app.post("/create-secret", (req, res) => {
  
});

app.use("/paste/", secret_path_router);

app.listen(5000, () => console.log("[*] listening on ::5000"));
