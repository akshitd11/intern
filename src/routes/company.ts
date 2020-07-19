import { Router } from "express";

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let companyRouter: Router = Router();

companyRouter.post('/', jsonParser, (req, res) => {
    res.send("Post Request");
    // var data = req.body
    // if (!data)
    //     res.sendStatus(400);
    // else
    // res.send('Result : Success', data)
});

export {companyRouter};

