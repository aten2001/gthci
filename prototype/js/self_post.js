$(function() {
	console.log("inside post page");
	var width = $(window).width();
	var height = $(window).height();
	
	$('#postPageID').width(width);
	$('#postPageContentID').width(width);
	$('#postWriteID').width(width);
	$('#postShowID').width(width);

	$('#postTextAreaID').width(width);
	console.log("page width: " + width);
	
	var buttonWidth = width * 0.1;
	var buttonHeight = $('#headerTitleImgID').height();
	
	// write header div
	$('#headerWriteImgID').width(width);
	$('#headerWriteImgID').height(buttonHeight);  
	
	$('#headerSubmitImgID').width(buttonWidth);
	$('#headerSubmitImgID').height(buttonHeight);
	
	$('#headerCancelImgID').width(buttonWidth);
	$('#headerCancelImgID').height(buttonHeight);
	
	$('#headerTitleImgID').width(width - (2 * buttonWidth));
	
	// write footer div
	$('#footerWriteImgID').width(width);
	$('#footerWriteImgID').height(buttonHeight);
	
	$('#footerWriteBarImgID').width(width);
	$('#footerWriteBarImgID').height(buttonHeight);
	
	// show header div
	$('#headerShowImgID').width(width);
	//$('#headerShowImgID').height(Math.floor(height * 0.15));
	$('#headerEyeID').width(width);
	$('#headerEyeID').height(Math.floor(height * 0.15));
	
	/*
	$('#headerLeftID').width(Math.floor(width * 0.9));
	$('#headerLeftID').height(Math.floor(height * 0.15));
	
	$('#headerRightID').width(Math.floor(width * 0.1));
	$('#headerRightID').height(Math.floor(height * 0.15));
	*/
	
	// show content div
	$('#contentShowTextID').width(width);
	$('#contentShowTextID').height(height * 0.7);
		
	// show footer div
	$('#footerShowImgID').width(width);	
	$('#footerShowImgID').height(height * 0.15);	
	$('#footerShowBarImgID').width(width);
	//$('#footerShowBarImgID').height(height * 0.15);		
	
	//$('#footerShowImgID').height(buttonHeight);
	//$('#headerTitleImgID').height(buttonHeight);
	//$('#footerWriteBarImgID').height(buttonHeight);
	
	//var oldBarHeight = $('#headerImgID').height();
	$(window).resize(function() {
		//oldBarHeight = (oldBarHeight * $(window).height()) / height;
		
		width = $(window).width();
		height = $(window).height();
		
		$('#postPageID').width(width);
		$('#postPageContentID').width(width);
		$('#postWriteID').width(width);
		$('#postShowID').width(width);
		$('#postTextAreaID').width(width);
		console.log("resized: " + width);
		
		buttonWidth = width * 0.1;
		buttonHeight = $('#headerTitleImgID').height();
		
		// write div header
		$('#headerWriteImgID').width(width);
		$('#headerWriteImgID').height(buttonHeight);
		$('#headerSubmitImgID').width(buttonWidth);
		$('#headerSubmitImgID').height(buttonHeight);
		$('#headerCancelImgID').width(buttonWidth);
		$('#headerCancelImgID').height(buttonHeight);
		$('#headerTitleImgID').width(width - (2 * buttonWidth));
		
		// write div footer
		$('#footerWriteImgID').width(width);
		$('#footerWriteBarImgID').width(width);
		
		// show div header
		$('#headerShowImgID').width(width);
		$('#headerShowImgID').height(height * 0.15);
		$('#headerEyeID').width(width);
		//$('#headerEyeID').height(Math.floor(height * 0.15));
	
		/*
		$('#headerLeftID').width(width * 0.9);
		$('#headerLeftID').height(height * 0.15);
		$('#headerRightID').width(width * 0.1);
		$('#headerRightID').height(height * 0.15);
		*/
		
		// show div content
		$('#contentShowTextID').width(width);
		$('#contentShowTextID').height(height * 0.7);
		
		// show div footer		
		$('#footerShowImgID').width(width);	
		$('#footerShowImgID').height(height * 0.15);	
		$('#footerShowBarImgID').width(width);
		//$('#footerShowBarImgID').height(height * 0.15);	
	});
	
	console.log("refer: " + document.referrer);
	if(document.referrer == "index.html") {
		console.log("come from custom privacy page, need to show eye on");
		$('#postWriteID').css('display', 'none');
		$('#postShowID').width($('#postWriteID').width());
		$('#postShowID').height($('#postWriteID').height());
		$('#postShowID').css('display', 'block');
		post = $('#postTextAreaID').val();
		console.log("post: " + post);
		$('#contentTextID').text("hi");
		console.log("after post: " + $('#contentTextID').val());
	}
	
	var post = "";
	$('#headerSubmitImgID').click(function() {
		$('#postWriteID').css('display', 'none');
		$('#postShowID').width($('#postWriteID').width());
		$('#postShowID').height($('#postWriteID').height());
		$('#postShowID').css('display', 'block');
		post = $('#postTextAreaID').val();
		console.log("post: " + post);
		$('#contentTextID').text(post);
		console.log("after post: " + $('#contentTextID').val());
	});
	
	$('#headerCancelImgID').click(function() {
		console.log("cancelling post");
	});
	
	$('#headerEyeID').click(function() {
		console.log("clicked eye");
		window.location.href = 'privacy.html';
	});
	
	$('#headerSubmitImgID').click(function() {
		console.log("submitting post");
	});
});