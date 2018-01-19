var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Teams = require("./teams");
var db = mongoose.createConnection('localhost', 'test');


var playerSchema = new Schema ( {
  name: String,
  value: Number,
  // team: [Teams.Schema],
  positionPlayed: String
});



// var players = [
//   {
//                 teamName: 'Phoenix Suns',
//                 name: 'Steve Nash',
//                 positionPlayed: 'Guard',
//                 value: 100
//               },
//   {
//                 teamName: 'San Antonio Spurs',
//                 name: 'Kawhi Leonard',
//                 positionPlayed: 'Forward',
//                 value: 120
//               },
// ];

const players = mongoose.model('Player', playerSchema);

module.exports = players;
