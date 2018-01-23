const express = require('express');
const router = express.Router();
const hardListPlayersData = require('../models/hardplayerlist');
const bodyParser = require('body-parser');
const hardList = express.Router();


hardList.use(bodyParser.urlencoded({extended: true}));
hardList.use(bodyParser.json());



// router.get('/players/show', (request, response) => {
//   response.render('NBA/allplayers', {
//     hardListPlayersData: hardList,
//     documentTitle: 'All of the players'
//   })
// })
//
// router.get('/hardlist/:id', function(req, res){
// 	console.log('getting by id')
// 	for (let i = 0; i < hardListPlayersData.length; i++) {
// 		if (hardListPlayersData[i].id == req.params.id) {
// 	      res.render('NBA/allplayers', {hardList: hardListPlayersData[i]});
// 		}
// 	}
// });





module.exports = router;
