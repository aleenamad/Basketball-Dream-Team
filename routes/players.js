const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const playersData = require('../models/players');
const players = express.Router();


players.use(bodyParser.urlencoded({extended: true}));
players.use(bodyParser.json());

router.get('/', (request, response) => {
  response.render('NBA/index.ejs', {
    playersData: players,
    documentTitle: 'All of the players'
  })
})

router.post('/', (request, response) => {
  let newPost = (request.body);
  playersData.save((err, createdPlayerObject) => {
    if (err) {
      console.log('nope aint workin');
      response.sendStatus(500);
    }
    response.render('index.ejs', {
      documentTitle: "All of the players",
      players: Player.findOne()
    })
  // playersData.push(newPost);
  // response.redirect('/players')
});
});



module.exports = router;
