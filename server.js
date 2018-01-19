const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Player = require('./routes/players')
var findOrCreate = require('mongoose-findorcreate')
// var Click = mongoose.model('Click', ClickSchema);
// ClickSchema.plugin(findOrCreate);
const playersRoute = require('./routes/players')


// middleware
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use('/players', playersRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



mongoose.connect('mongodb://localhost/user');
// const db = require('./models');
var db = mongoose.connection;

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// app.get('/players', (request, response) => {
//   db.Players.find((err, players) => {
//     response.json(players);
//   });
// });

app.listen(3000, ()=>{
    console.log("Yo Yo Yo");
});
