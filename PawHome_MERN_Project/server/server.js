import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import petRoutes from './routes/petRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';
import { seedPets } from './seed.js';
dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.get('/api/health', (_req,res) => res.json({ok:true,database:mongoose.connection.readyState===1?'connected':'disconnected'}));
app.use('/api/auth',authRoutes);
app.use('/api/pets',petRoutes);
app.use('/api/adoptions',adoptionRoutes);
app.use((_req,res)=>res.status(404).json({message:'Route not found'}));
app.use((err,_req,res,_next)=>{console.error(err);res.status(500).json({message:err.message||'Server error'});});
const PORT=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/pawhome')
.then(async()=>{console.log('MongoDB connected');await seedPets();app.listen(PORT,()=>console.log(`API: http://localhost:${PORT}`));})
.catch(err=>{console.error('MongoDB connection failed:',err.message);process.exit(1);});
