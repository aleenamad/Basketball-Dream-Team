const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const playersData = require('../models/players');
const players = express.Router();
const basketball = require("../controllers/playerscontroller.js");



players.use(bodyParser.urlencoded({extended: true}));
players.use(bodyParser.json());

// Get all players
router.get('/show', function(req, res) {
  console.log('show method active');
  basketball.list(req, res);
});

router.get('/', (request, response) => {
  console.log('Main Page');
  response.render('NBA/index.ejs', {
    playersData: players,
    documentTitle: 'All of the players'
  })
})

//create Team
router.get('/', basketball.create);

//save plater
router.post('/save', basketball.save);

// Get single player by id
router.get('/:id', basketball.list);


// Edit player input
router.get('/edit/:id', basketball.edit);


// Edit update
router.post('/update/:id', basketball.update);

router.post('/delete/:id', basketball.delete);









module.exports = router;
