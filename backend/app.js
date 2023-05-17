const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");

app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

//Route imports
const product = require("./routes/productRoute");  
const user = require("./routes/userRoute");

app.use("/api/v1",product)
app.use("/api/v1",user);



//Middleware for error
app.use(errorMiddleware);

module.exports = app;