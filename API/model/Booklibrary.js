const mongoose = require('mongoose');

const BookLibrarySchema = new mongoose.Schema(
    {
       name:{
           type: String,
           required: true,
       },
       year:{
           type: String,
           required: true,
       },
       author:{
           type:String,
           required:false,
       },
       domain:{
           type:String,
           required:true,
       },
       isavailable:{
           type:Array,
           required:false,
       }
},
{ timestamps : true }
);

module.exports = mongoose.model("Booklibrary", BookLibrarySchema)