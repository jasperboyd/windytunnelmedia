$(document).ready(function() {
	var $more = $('#morelink'); 
	var $basecontent = $('#basecontent');
	var $morecontent = $('#morecontent'); 
	var $moreopen = false; 
	
	var $nextlink = $('#nextlink');
	var $about = $('#about');
	var $support = $('#support'); 
	var $donate = $('#donate');
	var $featured = $('#featured');
	var $featuredone = $('#featuredone');
	var $featuredtwo = $('#featuredtwo');
	var $featuredthree = $('#featuredthree');
	var $featuredfour = $('#featuredfour');
	var $featuredsel = 0; 
	
	var $donate_link = $('#donate_link');
	var $share_link = $('#share_link');
	
	$more.click(function(){
		if ($moreopen){
			$moreopen = false; 
			$basecontent.animate({
				fontSize:"22.5px", lineHeight: '150%'}, 300, function(){
    				$about.animate({ width : '70%' }, 300, function(){
    					$about.animate({ padding : '0 15%' }, 200, function(){
    						$('html, body').animate({
         						scrollTop: $featured.offset().top
     							}, 500);
    						});
    					});
					});
			$more.text("More"); 
		} else { 
			$moreopen = true; 
			$basecontent.animate({
				fontSize:"14.4px", lineHeight: '200%'}, 300, function(){
					$about.animate({ width : '80%'}, 300, function(){
					$about.animate({ padding : '0 10%' }, 200, function(){
    						$('html, body').animate({
         						scrollTop: $about.offset().top
     							}, 500);
    						});
    					});
				}); 
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
					$featuredone.slideToggle(300, function(){
						$('html, body').animate({
         					scrollTop: $support.offset().top
     						}, 500, function(){	
     					});
					}); 
			});
     		$featuredsel = 0;
			break; 
		default: 
			break;
		} 
	}); 
	
	$donate_link.click(function(){
		$('html, body').animate({
         					scrollTop: $donate.offset().top
     						}, 500);
	});
	
	$share_link.click(function(){ 
		$('html, body').animate({
         					scrollTop: $support.offset().top
     						}, 500);
	});
});