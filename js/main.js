$(document).ready(function() {
	var $artists = $('#artists'); 
	var $artistslink = $('#artistslink'); 
	
	$artistslink.click(function(){
		$artists.fadeToggle(100); 
		$artistslink.toggleClass('artsel');
	}); 
	
	$artists.css('display', 'none'); 
});

