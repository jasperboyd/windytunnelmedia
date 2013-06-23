$(document).ready(function() {
	var $artists = $('#artists'); 
	var $artistslink = $('#artistslink'); 
	
	$artistslink.click(function(){
		$artists.slideToggle(500); 
		$artistslink.toggleClass('artsel');
	}); 
	
	$artists.slideToggle(0); 
});

