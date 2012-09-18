/*
  
  Not cool application, The BIG picture, by Oscar Dragén.
  
  Use at your own risk. ... ... lol
  
  (yeah, RESIZE ****!11!!!oneonetwo)
*/

var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;

exports.init = init;

function init() {

	updatePageWithTrackDetails();

	player.observe(models.EVENT.CHANGE, function (e) {

		// Only update the page if the track changed
		if (e.data.curtrack == true) {
			updatePageWithTrackDetails();
		}
	});
}

function updatePageWithTrackDetails() {

	var header = document.getElementById("header");

	// This will be null if nothing is playing.
	var playerTrackInfo = player.track;

	if (playerTrackInfo == null) {
		header.innerText = "Nothing playing!";
	} else {
		var track = playerTrackInfo.data;
		
    $("#AlbumCover").attr("src", track.album.cover);
    resizeAlbum();

	}
}

function resizeAlbum() {
  var height = $(window).height();
  var width = $(window).width()
		
  if(height > width) {
    height = width;
  }
  
  if(width > height) {
    width = height;
		}
	
    $("#AlbumCover").css("width", width + "px");
    $("#AlbumCover").css("height", height + "px");
}

$(window).resize(function() {
  resizeAlbum();
});
