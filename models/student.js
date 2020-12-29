const mongoose=require("mongoose");
const connection = require('../config/mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);


const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
     rollNo:{
         type:Number,
        
        
     },
     assignmentSubmitted:{
         type:Array,
        
     }
},{
    timestamps:true
})

schema.plugin(autoIncrement.plugin, { model: 'student', field: 'rollNo' });

const model = connection.model('student', schema);



module.exports=model;