var express = require("express");
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/clocking_system");
var nameSchema = new mongoose.Schema({
    firstName: String,
    Email: String,
    SRN: String,
    Package: String
});
var User = mongoose.model("staff", nameSchema);


app.post("/staff", (req, res) => {
    console.log("Posting Data")
    var myData = new User(req.body)
    myData.save()
        .then(item => {
            res.send("Thank you for sending a query. Our consultant will get back to you shortly...");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});