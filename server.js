const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');



// middleware
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, ()=>{
    console.log("Yo Yo Yo");
});
