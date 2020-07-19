import { Router } from "express";
import { companyRouter } from "./company";
import { resolveSoa } from "dns";

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/iiot-modterm-api-nodejs");

// var nameSchema = new mongoose.Schema({
//     companyName: String,
//     uniquecompanyName: String
// });
// var User = mongoose.model("User", nameSchema);


var bodyParser = require('body-parser');
let testRouter: Router = Router();
var mongodb = require('mongodb');

testRouter.use(bodyParser.json());

testRouter.get('/', (req, res) => {
    res.send({ response: "Success", data: {url: "/test/"}});
});
testRouter.get('/hello', (req, res) => {
    res.send({ response: "Success", data: {url: "/test/hello"} });
});
testRouter.post('/company', (req, res) => {
    var mydata = req.body;
    // mydata.save();
    if (Object.entries(mydata).length === 0) {
        res.status(400).send({ response: 'FAILED' });
    }
    else {
        res.send({ response: 'Success', mydata});
    }
});
testRouter.get('/company/')
export { testRouter };