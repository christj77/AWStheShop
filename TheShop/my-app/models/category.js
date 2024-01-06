import { Schema,  model } from  "mongoose";

const CategorytSchema = new Schema({
    name: String,
     

});
const Category = model.Category  ;
export default Category;