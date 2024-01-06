import { Schema,  model } from  "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,

});
const Product = model.Product  ;
export default Product;