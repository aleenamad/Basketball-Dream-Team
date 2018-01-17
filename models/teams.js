var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var teamSchema = new Schema ( {
  name: String,
  players:  Array
});

var Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;
module.exports.Schema = teamSchema;
