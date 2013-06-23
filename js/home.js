$(document).ready(function() {
	var $more = $('#morelink'); 
	var $basecontent = $('#basecontent');
	var $morecontent = $('#morecontent'); 
	var $moreopen = false; 
	
	var $nextlink = $('#nextlink');
	var $featuredone = $('#featuredone');
	var $featuredtwo = $('#featuredtwo');
	var $featuredthree = $('#featuredthree');
	var $featuredfour = $('#featuredfour');
	var $featuredsel = 0; 
	
	$more.click(function(){
		if ($moreopen){
			$moreopen = false; 
			$basecontent.animate({
				fontSize:"2em"}, 300);
			$more.text("More"); 
		} else { 
			$moreopen = true; 
			$basecontent.animate({
				fontSize:"1.5em"}, 300); 
			$more.text("Less");
		} 
		$morecontent.slideToggle(300); 
	}); 
	
	$nextlink.click(function(){
		switch ($featuredsel){
		case 0: 
			$featuredone.slideToggle(300, function(){
				$featuredtwo.slideToggle(300); 
			});
			$featuredsel = 1; 
			break; 
		case 1: 
			$featuredtwo.slideToggle(300, function(){
				$featuredthree.slideToggle(300); 
			});
			$featuredsel = 2;
			break; 
		case 2: 
			$featuredthree.slideToggle(300, function(){
				$featuredfour.slideToggle(300); 
			});
			$featuredsel = 3; 
			break; 
		case 3:
			$featuredfour.slideToggle(300, function(){
				$featuredone.slideToggle(300); 
			});
			$featuredsel = 0; 
			break; 
		default: 
			break;
		} 
	}); 
	
});