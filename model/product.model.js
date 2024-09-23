const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    "isDeleted" : {
        type : Boolean,
        default : false
    },
    "title": {
        type : String,
    },
    "description": {
        type : String,
    },
    "category": {
        type : String ,
    } ,
    "price" : {
        type : Number,
    },
    "discountPercentage": Number,
    "brand": String,
    "sku": {
        type : String,
    },
    "weight":{
        type : Number,
    },
    "rating":{
        type : Number,
    },
    "stock": {
        type : Number,
    },
    "tags": [{type : String}], // array of string types 
    "dimensions": {
      "width":  {
        type : Number,
      },
      "height": {
        type : Number,
      },
      "depth":  {
        type : Number,
      }
    },
    "reviews": [{
        "rating": Number ,
        "comment": String , 
        "date": String ,
        "reviewerName": String ,
        "reviewerEmail": String
      }],
    "returnPolicy": String,
    "minimumOrderQuantity": Number,
    "meta": {
      "createdAt": {
        type : String,
      },
      "updatedAt":  {
        type : String,
      },
      "barcode": {
        type : String,
      } ,
      "qrCode":  {
        type : String,
      } 
    },
    "images": [{type : String }],
    "thumbnail":{type : String },
    "warrantyInformation": {type : String},
    "shippingInformation": {type : String },
    "availabilityStatus": String
});

module.exports = mongoose.model('products',productSchema);
