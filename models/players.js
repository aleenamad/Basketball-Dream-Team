var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Teams = require("./teams");
var db = mongoose.createConnection('localhost', 'test');


var playerSchema = new Schema ( {
  name: String,
  Points: Number,
  Team: [Teams.Schema]
});


var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
