var $playerList;
var allPlayers = [];

$(document).ready(function(){

  /* document ready */
  console.log('app.js loaded!');
  $.get('/').success(function (players) {
    players.forEach(function(players) {
      renderPlayer(players);
    });
  });


})

var test = document.getElementById('test');
test.onclick = function() {
    console.log('Hello');
}

function renderPlayer(players) {
  var html = generateAlbumHtml(players);
  console.log('rendering players:', players);

  $('#players').prepend(html);
}


$.getJSON("/all", function(data) {
    console.log(data)
  // For each entry of that json...
  for (var i = 0; i < data.length; i++) {
    // Append each of the players properties to the table
    $("#results").append(data[i].name + data[i].team + data[i].positionPlayed + data[i].value);
  }
});
