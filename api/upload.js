
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const fs= require("fs");
const path = require('path');

function assignMent(name,path,deadline){
   return{
       name,
       path,
       deadline
   }


}


module.exports.upload =  async (req,res) => {
    console.log(req.body)

        try{ 
        //  let user = await Teacher.findById(req.params.id);
        let teacher = await Teacher.findOne({email: req.body.email});

        // if(!teacher || teacher.password!= req.body.password){
         Teacher.uploadedAvatar(req,res,(err)=>{
             if(err){console.log(`Multer error`,err);
               return;
            }
            
             
             if(req.file){
                 if(teacher.avatar){
                     fs.unlinkSync(path.join(__dirname,'..',teacher.avatar));
                 }
                 //saving the path of uploaded file into avatar field in teacher
                 

                 teacher.assignmentGiven.push(assignMent("abc",Teacher.avatarPath + '/' +req.file.filename,"15")) ;
             }
             teacher.save();
             return res.json(200, { 
                message: "File Uploaded"
            });
         })
        // }
    }catch (err){
        
            return res.json(500, {
                message: "Internal Server Error"
            });
        }
 
        
    }
   
 