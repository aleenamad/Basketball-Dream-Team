//to add new players



var mongoose = require("mongoose");
var Schema = mongoose.Schema;




var playerSchema = new Schema ({
  name: String,
  value: Number,
  team: String,
  positionPlayed: String
});


var players = mongoose.model('players', playerSchema);

module.exports = players;
