const express = require('express');
const router = express.Router();
const hardListPlayersData = require('../models/hardplayerlist');
const bodyParser = require('body-parser');
const hardList = express.Router();


hardList.use(bodyParser.urlencoded({extended: true}));
hardList.use(bodyParser.json());



router.get('/', (request, response) => {
  response.render('NBA/allplayers.ejs', {
    hardListPlayersData: hardList,
    documentTitle: 'All of the players'
  })
})




module.exports = router;
