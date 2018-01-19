const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser')
const app = express();
const allPlayers = require('../models/players');



router.get('/players', function(req, res){
  res.render('index', {allPlayers: allPlayers });
});




module.exports = router;
