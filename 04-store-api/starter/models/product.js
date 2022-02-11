const mongoose = require(`mongoose`);

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, `Product must have a name`]
    },
    price : {
        type : Number,
        require : [true, `Product must have a price`]
    },
    featured : {
        type : Boolean,
        default : false
    },
    rating : {
        type : Number,
        default : 4.5
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String,
        enum : {
            values : [`ikea`, `liddy`, `caressa`, `marcos`],
            message : `{VALUE} is not supported`
        }
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;