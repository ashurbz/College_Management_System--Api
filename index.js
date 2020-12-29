const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const db = require('./config/mongoose');
const port=process.env.PORT||8000;

app.use(express.json());





app.use('/',require('./routes'));







app.listen(port,(err)=>{
    if(err){
        console.log(`Server is not running Error: ${err}`)
    }
    console.log(`Server is running on port: ${port}`);
})