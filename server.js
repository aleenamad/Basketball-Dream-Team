const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Player = require('./routes/players');
var findOrCreate = require('mongoose-findorcreate');
// var Click = mongoose.model('Click', ClickSchema);
// ClickSchema.plugin(findOrCreate);
const playersRoute = require('./routes/players');
var hardListRoutes = require('./routes/hardlist');
const faqRoute = require('./routes/faq')


// middleware
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use('/players', playersRoute);
app.use('/hardplayerlist', hardListRoutes);
app.use('/', faqRoute);
app.use(bodyParser.urlencoded({ extended: true }));





app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//database
var db
mongoose.connect('mongodb://localhost/dreamteam', (err, databse) => {
  if (err) return console.log(err)
  db = databse
})

// routes

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/players/:id', function playersShow(req, res) {
  console.log('requested players id=', req.params.id);
  db.players.findOne({_id: req.params.id}, function(err, players) {
    res.json(players);
  });
});


// adding a player
app.post('/players', (req, res) => {
  db.collection('players').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to databse')
    res.redirect('/')
  })
})



// delete a player










app.listen(3000, ()=>{
    console.log("Yo Yo Yo");
});
