
import mongoose from 'mongoose';
import User from '@/models/user';

// Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual MongoDB connection string
const uri = 'mongodb+srv://christj77:1234@cluster0.aqo88ro.mongodb.net/TheShop?retryWrites=true&w=majority'; // Replace with your MongoDB URI

// Establish MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Jezus Christ - Hell ----Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Handler for user registration
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;

    try {
      // Create a new user instance
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });

      // Save the user to MongoDB
      await newUser.save();
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}


// import { connect } from '/lib/mongoose';
// import User from '@/models/user';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await connect(); // Ensure 'connect' is imported and used correctly

//       // Rest of your code...
//     } catch (error) {
//       console.error('Error registering user:', error);
//       res.status(500).json({ error: 'Failed to register user' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }





