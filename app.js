require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT;
const dbURL = process.env.MONGO_URI;
const path = require('path');


// Database connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`Database connection established successfully.....`))
    .catch(err => console.log(err));    

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
// app.use("public/images",express.static(path.join(__dirname,"public/images")))

app.get("/",(req,res) => {
    res.send("Welcome to Fashion Project");
});


// user Routes

const userRoutes = require('./routes/user.routes');
app.use('/api/user',userRoutes);

// Product Routes

const productRoutes = require("./routes/product.routes");
app.use("/api/product",productRoutes);

//order Routes
const orderRoutes= require('./routes/order.routes');
app.use("/api/order",orderRoutes);

//wishlist Routes
const wishlistRoutes=require('./routes/wishlist.routes')
app.use("/api/wishlist",wishlistRoutes)

//Review Routes
const reviewRoutes = require('./routes/review.routes');
app.use("/api/review", reviewRoutes)



app.listen(port , ()=>{
    console.log(`Server start`);
});