const express = require('express');

const router = express.Router();
const signup = require('../api/signup');

router.post('/',signup);


module.exports = router;