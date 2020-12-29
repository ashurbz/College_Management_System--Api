const Student = require("../models/student");
const Teacher = require("../models/teacher");


const signin= async function(req, res){
    try{
        let student = await Student.findOne({email: req.body.email},{});
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
        })
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    

}

module.exports=signin;