var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Song = require("./teams");



var playerSchema = new Schema ( {
  name: String,
  Points: Number,
  Team: [Team.Schema]
});


var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
