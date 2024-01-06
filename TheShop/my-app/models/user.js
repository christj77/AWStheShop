import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Create a User schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// Check if the model already exists before defining it
const User = mongoose.models.User || model('User', userSchema);

export default User;




// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: [true, "Please provide First name"],
    
//   },
//   lastName: {
//     type: String,
//     required: [true, "Please provide Last name"],
     
//   },
//   email: {
//     type: String,
//     required: [true, "Please provide Email"],
//     unique: true
//   },
//   password: {
//     type: String,
//     required: [true, "Please provide Password"],
    
//   }
// });

// // Define the User model based on the schema
// const User = mongoose.model("User");

// export default User;













