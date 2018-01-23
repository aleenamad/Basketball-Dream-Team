const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const methodOverride = require('method-override');
const playersRoute = require('./routes/players');
const playerz = require('./models/players');
// var hardListRoutes = require('./routes/hardlist');
const faqRoute = require('./routes/faq')



// middleware
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use('/players', playersRoute);
app.use('/', faqRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));





app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//database
var db
mongoose.connect('mongodb://localhost/dreamteam', (err, databse) => {
  if (err) return console.log(err)
  db = databse
  console.log('database is connected');
})

// routes

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




// 
// adding a player
app.post('/players', (req, res) => {
  db.collection('players').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.render('NBA/index')
    // res.redirect('NBA/index')
  })
})











app.listen(3000, ()=>{
    console.log("Yo Yo Yo");
});
