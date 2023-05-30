const connection = require("./model");
const express = require("express")
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
require("dotenv").config();

const FastPayController = require("./controllers/fastpay");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("views", path.join(__dirname, "/views/"));

app.engine("hbs", engine({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs")

app.get("/", (req, res) => {
    // res.send("HELLO UNIVERSE112!!!")
    res.render("index", {})
});

app.use("/", FastPayController)
app.use(express.static('/public'));
app.use('/css', express.static(__dirname + "/public/css"));
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/img', express.static(__dirname + "/public/img"));
app.use('/img/clients', express.static(__dirname + "/public/img/clients"));
app.use('/vendor', express.static(__dirname + "/public/vendor"));


app.listen(process.env.PORT, () => {
    console.log("App listening on port", process.env.PORT);
})