const Student = require("../models/student");
const Teacher = require("../models/teacher");
const jwt = require('jsonwebtoken');


const signin= async function(req, res){
    try{
    
        let student = await Student.findOne({email: req.body.email},{});
        if(student){
        if(!student || student.password!= req.body.password){
            return res.json(401,{
                message: "Invalid username or password"
            });
        }
        return res.json(200,{
            message: 'Sign in successfull',
            data:  {
                token: jwt.sign(student.toJSON(), 'ptwmjgad', {expiresIn:  '1000000'})
            }
        }
        )
    }

    let teacher = await Teacher.findOne({email: req.body.email},{});
        if(!teacher || teacher.password!= req.body.password){
            return res.json(401,{
                message: "Invalid username or password"
            });
        }
        return res.json(200,{
            message: 'Sign in successfull',
            data:  {
                token: jwt.sign(teacher.toJSON(), 'ptwmjgad', {expiresIn:  '1000000'})
            }
        }
        )
    





    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    

}

module.exports=signin;