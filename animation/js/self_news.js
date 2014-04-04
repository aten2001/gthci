$(function() {
	$("#newsListID").sortable();
	$("#newsListID").disableSelection();
	
	/*
	var list = $('#newsListID img');
	$.each(list, function(i) {
		console.log("width: " + $(list[i]).width() + " - height: " + $(list[i]).height());
	});
	*/
	
	/*
	var list = $('#newsListID li');
	$.each(list, function(i) {
		var item = $(list[i]);
		var img = item.find('img');
		item.width($(img).width());
		item.height($(img).height());
		console.log("width: " + $(img).width() + " - height: " + $(img).height());
	});
	*/
	
	var maxWidth = 200;
	//var maxWidth = getMaxWidth();
	console.log("max width: " + maxWidth);
	var list = $('#newsListID li');
	$.each(list, function(i) {
		var item = $(list[i]);
		var img = item.find('img');
		item.width(maxWidth);
		$(img).width(maxWidth);
		item.height($(img).height());
		console.log("width: " + $(img).width() + " - height: " + $(img).height());
	});
});

function sortList() {
	var imgList = $('#newsListID img');
	$imgList.sort(function(a,b) {
		var aWidth = $(a).width();
		var bWidth = $(b).height();
		if(aWidth > bWidth) 
			return 1;
		else if(aWidth < bWidth)
			return -1;
		return 0;
	});
}

function getMaxWidth() {
	var imgList = $('#newsListID img');
	var max = $(imgList[0]).width();
	$.each(imgList, function(i) {
		var temp = $(imgList[i]).width();
		console.log("comparing " + temp + " vs " + max);
		if(temp > max)
			max = temp;
	});
	return max;
}

function getMinWidth() {
	var imgList = $('#newsListID img');
	var min = $(imgList[0]).width();
	$.each(imgList, function(i) {
		var temp = $(imgList[i]).width();
		console.log("comparing " + temp + " vs " + min);
		if(temp < min)
			min = temp;
	});
	return min;
}