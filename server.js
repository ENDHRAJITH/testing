// server.js

import express from 'express';
import mongoose from 'mongoose';
 
import cors from 'cors';

// Load env variables


const app = express();
const PORT =  5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
 
console.log("CodeRabbit AI test change");
// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://endhrajiththiyagu:end123@cluster0.3wu5ebk.mongodb.net/`)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
