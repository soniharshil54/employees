const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const employees = require("./routes/api/employees")
const path = require("path")



const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


mongoose
    .connect(db, {useNewUrlParser : true})
    .then(()=>console.log("mongo connected"))
    .catch(err => console.log(err))

app.use('/api/employees', employees)

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server connected port ${port}`))


