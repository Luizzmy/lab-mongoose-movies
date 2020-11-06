const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

router.get('/celebrities', async (req, res, next) => {
    const celebrity= await Celebrity.find()
    next.catch(err => console.error('There was an error', err));
    res.render("celebrities/index", {celebrity})
  });

module.exports = router;