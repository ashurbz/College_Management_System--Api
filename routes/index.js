const express = require('express');

const router = express.Router();
const signup = require('../api/signup');
const signin = require('../api/signin');
const info = require('../api/info');
const {upload} =require("../api/upload")

router.get('/',)

// const passport=require("../config/passport-jwt")
router.post('/signup',signup);
router.post('/signin',signin);
// router.get("/",passport.authenticate('jwt',{session: false}),info)
router.post("/upload",upload)


module.exports = router;   