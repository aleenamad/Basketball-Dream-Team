var mongoose = require("mongoose");
var Players = require("../models/players");

var playersController = {};

// create new Team
playersController.create = function(req, res) {
  res.render("../views/NBA/createteam");
};






//



// Save new player
playersController.save = function(req, res) {
  var playerz = new Players(req.body);

  playerz.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/NBA/index");
    } else {
      console.log("Successfully created an player.");
      res.redirect("/players/show/"+playerz._id);
    }
  });
};

// // Show player by id
playersController.show = function(req, res) {
  Players.findOne({_id: req.params.id}).exec(function (err, playerz) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/NBA/singleplayer", {Players: playerz});
    }
  });
};


// Show list of players
playersController.list = function(req, res) {
  Players.find({}).exec(function (err, playerz) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log('find method active');
      res.render("../views/NBA/allplayers", {playerz: playerz});
    }
  });
};




playersController.edit = function(req, res) {
  Players.findOne({_id: req.params.id}).exec(function (err, playerz) {
    if(err) {
      console.log(err);
    } else {
      res.render('../views/NBA/edit', {playerz: playerz});
    };
  });
};


// Update an player
playersController.update = function(req, res) {
  Players.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, team: req.body.team, position: req.body.positionPlayed, value: req.body.value }}, { new: true }, function (err, playerz) {
    if (err) {
      console.log(err);
      res.render('../views/NBA/edit', {playerz: req.body});
    }
    res.redirect("../"+playerz._id);
  });
};

// Delete an player
playersController.delete = function(req, res) {
  Players.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Player deleted!");
      res.redirect("/players/show");
    }
  });
};






module.exports = playersController;
