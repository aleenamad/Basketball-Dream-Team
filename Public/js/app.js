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



function renderPlayer(players) {
  var html = generateAlbumHtml(players);
  console.log('rendering players:', players);

  $('#players').prepend(html);
}
