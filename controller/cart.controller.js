const Cart = require("../model/cart.model");

exports.addtoCart = async (req , res) => {
    try {
       
        let userId = req.user._id;
        let cart = await Cart.findOne({
            user: userId,
            productId : req.body.productId,
            isDelete : false 
        });
        if(cart){
            return res.json({message: 'Already exist...'})
        }
        cart = await Cart.create({user: userId, ...req.body});
        res.status(201).json({message: 'Cart Added' , cart})
    } catch (err) {
        console.log(err);
        res.status(500).json({message : "server error"});  
    }
};
    


exports.getAllCart=async(req , res) => {
    try {
        let carts= await Cart.find({
            user:req.user._id , 
            isDelete: false
        });
        res.status(200).json(carts);
    } catch (err) {
        console.log(err);
         res.status(500).json({message:"Internal Server Error"});   
    }
};


exports.updateCart = async (req,res)=>{
    try {
        
        
    let cart = await Cart.findOneAndUpdate({productId:req.body.productId},{$set:{quantity:+req.body.quantity}},{$new:true});
  

    console.log(cart);
    if(!cart) {
    return res.status(404).json({msg:"Cart Not Found..."});
    } 
    res.status(200).json({message:"Cart Update SuccessFully",cart});
    } catch (err) {
    console.log(err);
    res.status(500).json({msg:"Internal Server Error"})
    }
   }
   
   exports.deleteCart = async (req,res)=>{
    try {
    let cart = await Cart.updateOne({_id:req.user.cartId},{$set: {isDelete:true}},{ new:true });
    console.log(cart);
    if(!cart){
    return res.status(404).json({msg:"cart Not Found..."});
    }
    res.status(200).json({msg:"cart Delete SuccessFully...",cart});
    } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error...."});
    }
   }