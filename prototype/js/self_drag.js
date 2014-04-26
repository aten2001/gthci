$(function() {
	$("#favFeaturesID, #allFeaturesID").sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();
	
	console.log("fav height: " + $('#favFeaturesID')[0].scrollHeight);
	console.log("all height: " + $('#allFeaturesID')[0].scrollHeight);
	
	$('#dragDivID').height(Math.max($('#favFeaturesID')[0].scrollHeight, $('#allFeaturesID')[0].scrollHeight) + 100);
	$('#favDivID').width($('#favFeaturesID')[0].scrollWidth);
	$('#allDivID').width($('#allFeaturesID')[0].scrollWidth);
	$('#dragDivID').width($('#favDivID').width() + $('#allDivID').width() + 300);
});