$(document).ready(function() {
	var $artists = $('#artists'); 
	var $artistslink = $('#artistslink'); 
	var $white = false; 
	
	$artistslink.click(function(){
		$artists.slideToggle(500); 
		if ($white) {
			$artistslink.css('color', 'white');
			$white = false; 
		} else {
			$artistslink.css('color', '#409ae6');
			$white = true; 
		}
	}); 
	
	$artistslink.mouseover(function(){
		$artistslink.css('color', '#409ae6');
	});
	
	$artistslink.mouseleave(function(){
		if (!$white){
			$artistslink.css('color', 'white');
		}
	}); 
	
	$artists.slideToggle(0); 
});

