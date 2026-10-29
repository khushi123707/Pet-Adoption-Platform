import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},category:{type:String,enum:['Dog','Cat','Bird','Rabbit'],required:true},breed:{type:String,required:true},age:{type:String,required:true},city:{type:String,required:true},image:{type:String,required:true},gender:{type:String,enum:['Male','Female','Unknown'],default:'Unknown'},description:{type:String,default:''},adopted:{type:Boolean,default:false},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null}},{timestamps:true});
export default mongoose.model('Pet',schema);
