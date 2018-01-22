const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const faq = express.Router();

faq.use(bodyParser.urlencoded({extended: true}));
faq.use(bodyParser.json());


router.get('/faq', function(req, res){
  res.render('NBA/faq');
});

module.exports = router;
