const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    productName: { type: String, require: true },
    price: { type: Number },
    categories: { type: Array },
    images: { type: Array },
    description: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
