import { MongoClient } from 'mongodb';

// Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual MongoDB connection string
const uri = 'mongodb+srv://christj77:1234@cluster0.aqo88ro.mongodb.net/TheShop?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
import Category from '@/models/product';
export default async function handler(req, res) {
  try {
    await client.connect();
    console.log('Jezus connected to the MongoDB database');
    const database = client.db('TheShop'); // Replace 'your_database_name' with your actual database name
    const categories = await database.collection('categories').find({}).toArray();
    console.log('Display the categories' );
    res.status(200).json({ categories });
  } catch (error) {
    console.error('Error connecting to the database or fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch the data' });
  } finally {
    // Close the connection after fetching data
    await client.close();
  }
}