$(document).ready(function(){    
	$('#defHeader2ID').width($('#quickHeaderID').width());
	
	$(window).resize(function() {
		console.log("window resized");
		$('#defHeader2ID').width($('#quickHeaderID').width());
	});
});
