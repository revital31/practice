const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Types;

const cartSchema = new Schema({
    // refernce  to products.js -to connect them
    products: [{type: ObjectId, ref: 'Product'}]
}, {
    collection: 'carts', 
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {Cart};