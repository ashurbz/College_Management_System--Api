const Student = require("../models/student");
const Teacher = require("../models/teacher");
const jwt = require('jsonwebtoken');


const info= async function(req, res){
    try{
    
        let student = await Student.findOne({email: req.body.email});
        if(student)
         {
        let {name,email,rollNo,assignmentSubmitted,role}=student;

        if(!student || student.password!= req.body.password){
            return res.json(401,{
                message: "Invalid Token"
            });
        }
        return res.json(200,{
            message: 'Success',
            data:  {
               name,
               email,
               rollNo,
               assignmentSubmitted,
               role
            
            
            }
        })}
        // naughty fications count aa rahi hai bas

        let teacher = await Teacher.findOne({email: req.body.email});
        let {name,email,empId,assignmentGiven,role}=teacher;

        if(!teacher || teacher.password!= req.body.password){
            return res.json(401,{
                message: "Invalid Token"
            });
        }
        return res.json(200,{
            message: 'Success',
            data:  {
               name,
               email,
               empId,
               assignmentGiven,
               role
            
            
            }
        })



    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    

}

module.exports=info;