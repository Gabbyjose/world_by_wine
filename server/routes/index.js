const app = require("express")();

app.use("/countries", require("./countries"));
app.use("/grapes", require("./grapes"));

module.exports = app;
