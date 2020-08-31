const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number
}, {
    collection: 'products', 
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
//didnt work - did in compass on my own
Product.insertMany([
{name: "computer", price:"5000"},
{name:"screen",price:2000},
{name:"flashlight",price:1000},
{name:"keyboard",price:250}
]);

module.exports = {Product};