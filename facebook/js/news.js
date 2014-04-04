$(document).ready(function(){    
	$('#defHeader3ID').width($('#newsHeaderID').width());
	$('#defHeader4ID').width($('#newsHeaderID').width());
	
	var extra = 30;
	$('#newsDivID').width($($('#newsListID li')[0]).width() + extra);
	
	$(window).resize(function() {
		console.log("window resized");
		
		var newBarWidth = $('#newsHeaderID').width();
		$('#defHeader3ID').width(newBarWidth);
		$('#defHeader4ID').width(newBarWidth);
		
		var newItemWidth = $($('#newsListID li')[0]).width() + extra;
		$('#newsDivID').width(newItemWidth);
		
		var list = $('#newsListID li');
		$.each(list, function(i) {
			var item = $(list[i]);
			var img = item.find('img');
			item.width(newItemWidth);
			$(img).width(newItemWidth);
			item.height($(img).height());
		});
	});
});
