// lib/mongoose.js
import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://christj77:1234@cluster0.aqo88ro.mongodb.net/TheShop?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB-jezus ');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export { connect };

// const uri="mongodb+srv://christj77:1234@cluster0.aqo88ro.mongodb.net/TheShop?retryWrites=true&w=majority";
// const mongoose = require("mongoose");
// const { config } = require("dotenv");




// async function connect(){
//     try 
//     {
//         await mongoose.connect(uri)
//         console.log("Jezus Christ ..Finally Connected to MangoDB ");
//     }catch (error){
//         console.error(error);
//     }
// }
// connect();


// import { iniMongoose } from "@/lib/mongoose"
// import mongoose, { connection } from "mongoose";
//  export async function  initMongoose() {

//     if(mongoose.connection.readyState===1){
//             return await mongoose.connection.asPromise
//     }
   
//    return  await mongoose.initMongoose(process.env.MONGODB_URL, {
//        });
// }

