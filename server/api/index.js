const app = require("express")();

app.use("/countries", require("./countries"));
app.use("/grapes", require("./grapes"));
app.use("/regions", require("./regions"));

module.exports = app;
