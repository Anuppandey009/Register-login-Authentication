const express = require('express');

const {register, login} = require("./controllers/auth.controller")
//const productController = require("./controllers/product.controller")

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);
//app.use("/products", productController)   // when the given user sucessfully enter the email and password then he gets
                                         // access to use the product

module.exports = app;