const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({ //schema
    author:{
        type : String,
        trim : true,
        required : true
    },
    quote:{
        type : String,
        trim : true,
        required : true

    }
    
});

const Product = mongoose.model('Product1' , productSchema); //model

module.exports = Product;