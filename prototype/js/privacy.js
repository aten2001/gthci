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
	
	$('#done2').click(function() {
		$('.indexPageID').fadeTo( "slow", 0.0);
		window.location = "privacy2.html";
	});
	
	$('#done').click(function() {
		$('.indexPageID').fadeTo( "slow", 0.0);
		window.location = "privacy.html";
	});
	
	$('#shortcuts').click(function() {
		$('.indexPageID').fadeTo( "slow", 0.0);
		window.location = "home.html";
	});
	
	$('#shortcuts2').click(function() {
		$('.indexPageID').fadeTo( "slow", 0.0);
		window.location = "home2.html";
	});
	
	$('#PrivacyEye').click(function() {
		
		window.location = "privacy2.html";
	});
	
	$('#settings1ID').bind('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
	  
	$(window).resize(function() {
		console.log("window resized");
		$('#defHeader1ID').width($('#indexHeaderID').width());
		$('#backDivID').width('20%');
		$('#nameDivID').width('20%');
	});
	
	$('.ui-li-heading').click(function() {
	alert("item clicked");
	
	
	});
	
	$('#done2').click(function() {
		window.location.href = 'home2.html';
	});
});
