$(document).ready(function() {
	var $artists = $('#artists'); 
	var $artistslink = $('#artistslink'); 
	var $white = false; 
	
	$artistslink.click(function(){
		$artists.slideToggle(500); 
		if ($white) {
			$artistslink.css('color', '#4c4681');
			$white = false; 
		} else {
			$artistslink.css('color', 'white');
			$white = true; 
		}
	}); 
	
	$artists.slideToggle(0); 
});

