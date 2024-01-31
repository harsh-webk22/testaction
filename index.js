const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/1", (req, res) => {
    res.send("Hihjcvn");
  });
  
app.listen(9000, () => {
  console.log("Server running!");
});
