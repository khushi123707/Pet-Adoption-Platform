import {Router} from 'express';import Adoption from '../models/Adoption.js';import Pet from '../models/Pet.js';
const router=Router();
router.post('/',async(req,res,next)=>{try{const{petId,applicantName,email,phone,city,message}=req.body;if(![petId,applicantName,email,phone,city].every(v=>String(v||'').trim()))return res.status(400).json({message:'Please fill in name, email, phone and city.'});const pet=await Pet.findById(petId);if(!pet||pet.adopted)return res.status(404).json({message:'This pet is no longer available.'});const adoption=await Adoption.create({pet:pet._id,applicantName,email,phone,city,message});res.status(201).json({message:`Your adoption request for ${pet.name} has been submitted!`,adoption});}catch(e){next(e);}});
export default router;
