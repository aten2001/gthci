$(document).ready(function(){    
	$('#defHeader1ID').width($('#indexHeaderID').width());

	$('#newsfeed1ID').click(function() {
		window.location = "newsfeed.html";
	});
	
	$('quick1ID').click(function() {
		window.location = "quick.html";
	});
	
	$('#cusQuick1ID').click(function() {
		window.location = "quick.html";
	});
	
	$(window).resize(function() {
		console.log("window resized");
		$('#defHeader1ID').width($('#indexHeaderID').width());
		$('#backDivID').width('20%');
		$('#nameDivID').width('20%');
	});
});
