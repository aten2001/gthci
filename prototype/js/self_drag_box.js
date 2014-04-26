$(function() {
	$("#nameListID, #acceptListID").sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();
});