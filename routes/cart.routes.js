const express = require("express");
const cartRoutes = express.Router();

const {verifyToken} = require('../helpers/tokenVerify');
const { addtoCart, getAllCart, deleteCart, updateCart } = require("../controller/cart.controller");

cartRoutes.post("/addcart",verifyToken,addtoCart);

cartRoutes.get("/getcart",verifyToken,getAllCart);
cartRoutes.post("/updatecart",verifyToken,updateCart)
cartRoutes.delete("/delete" , verifyToken , deleteCart);
module.exports = cartRoutes;