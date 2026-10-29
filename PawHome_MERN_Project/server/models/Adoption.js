import mongoose from 'mongoose';
const schema=new mongoose.Schema({pet:{type:mongoose.Schema.Types.ObjectId,ref:'Pet',required:true},applicantName:{type:String,required:true},email:{type:String,required:true,lowercase:true},phone:{type:String,required:true},city:{type:String,required:true},message:{type:String,default:''},status:{type:String,enum:['Pending','Approved','Rejected'],default:'Pending'}},{timestamps:true});
export default mongoose.model('Adoption',schema);
