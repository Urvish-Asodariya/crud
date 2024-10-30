const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productID: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["Available", "Unvailable"],
        default: "Available"
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    supplierName: {
        type: String
    },
    ratings: {
        type: Number,
        min: [1, 'Must be at least 1, got {VALUE}'],// this will show error if ratings not got more than 0 or 1
        max: 5
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
