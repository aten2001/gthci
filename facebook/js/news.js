$(document).ready(function(){    
	var barWidth = $('#newsHeaderID').width();
	$('#defHeader3ID').width(barWidth);
	$('#defHeader4ID').width(barWidth);
	
	var extra = 30;
	var itemWidth = $($('#newsListID li')[0]).width() + extra;
	$('#newsDivID').width(itemWidth);
	
	var diff = itemWidth/barWidth;
	
	$(window).resize(function() {
		console.log("window resized");
		
		var newBarWidth = $('#newsHeaderID').width();
		$('#defHeader3ID').width(newBarWidth);
		$('#defHeader4ID').width(newBarWidth);
		
		var newItemWidth = $($('#newsListID li')[0]).width() + extra;
		$('#newsDivID').width(newItemWidth);
		$('#newsDivID').css('margin', 'auto');
		
		var list = $('#newsListID li');
		$.each(list, function(i) {
			var item = $(list[i]);
			var img = item.find('img');
			item.width(diff * newBarWidth);
			item.height($(img).height());
			$(img).width(diff * newBarWidth);
			item.css('margin', 'auto');
		});
		
		console.log("new bar width: " + newBarWidth);
		console.log("new item width: " + newItemWidth);
	});
});
