const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(9000, () => {
  console.log("Server running!");
});
