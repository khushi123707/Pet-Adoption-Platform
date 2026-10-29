import Pet from './models/Pet.js';
const sample=[
{name:'Bruno',category:'Dog',breed:'Labrador',age:'2 yrs',city:'Bareilly',gender:'Male',image:'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',description:'Friendly, playful and ready for his forever family.'},
{name:'Misty',category:'Cat',breed:'Persian cat',age:'1 yr',city:'Delhi',gender:'Female',image:'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85',description:'A gentle, curious cat who loves a sunny spot.'},
{name:'Kiwi',category:'Bird',breed:'Parrot',age:'3 yrs',city:'Lucknow',gender:'Male',image:'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=85',description:'A bright little companion.'},
{name:'Tommy',category:'Rabbit',breed:'Indie rabbit',age:'6 mo',city:'Badaun',gender:'Male',image:'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=85',description:'A sweet rabbit looking for a caring home.'}];
export async function seedPets(){if(await Pet.countDocuments()===0){await Pet.insertMany(sample);console.log('Sample pets added to MongoDB');}}
