const mongoose=require("mongoose");
const connection = require('../config/mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);


const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
     ,
     empId:{
         type:Number,
         required:true,
        
     },

     assignmentGiven:{
         type:Array,
     }
     
    

     

},{
    timestamps:true
})

schema.plugin(autoIncrement.plugin, { model: 'Teacher', field: 'empId' });

const model = connection.model('Teacher', schema);









// const model=mongoose.model("doctors",schema);

module.exports=model;