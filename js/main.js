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
	
	$artistslink.mouseover(function(){
		$artistslink.css('color', 'white');
	});
	
	$artistslink.mouseleave(function(){
		if (!$white){
			$artistslink.css('color', '#4c4681');
		}
	}); 
	
	$artists.slideToggle(0); 
});

