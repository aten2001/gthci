( function( $ ) {
	var accepted;
	$.fn.extend({

		alphascroll: function() {

			return this.each( function() {

				var content  = $( this ),
					alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
					shortAlphabet = ['a','d','g','j','m','p','s','w','z'],
					dividers = [],
					dividerClass,
					scrollbar = '';

				// attach classes to list autodividers
				$( content ).find( '.ui-li-divider' ).each( function() {
					dividerClass = $( this ).html().toLowerCase();
					dividers.push( dividerClass );
					$( this ).addClass( dividerClass );
				});

				// create and display the scrollbar
				function createScrollbar() {
					// generate scrollbar HTML
					$( alphabet ).each( function( index, value ) {
						// attach the alphascroll-item class to each letter if there is a corresponding divider (acts as a link)
						if ( $.inArray( value, dividers ) > -1 ) {
							scrollbar += '<li id="alphascroll-' + value + '" class="alphascroll-item" unselectable="on" style="font-size: 20px; line-height: 25px;">' + value.toUpperCase() + '</li>';
						}
						else {
							scrollbar += '<li id="alphascroll-' + value + '" unselectable="on">' + value.toUpperCase() + '</li>';
						}
					});

					// attach scrollbar to page
					$( content ).wrap( '<div />' );
					var wrapper = $( content ).parent();
					$( wrapper ).prepend( '<ul class="alphascroll">' + scrollbar + '</ul>' );
					var alphascroll = $( content ).closest( 'div' ).children( '.alphascroll' );

					// bind touch event to scrollbar (for touch devices)
					$( alphascroll ).bind( 'touchmove', function( event ) {
						event.preventDefault();
						var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
						// scroll to divider position
						alphaScroll( touch.pageY );
					});

					// bind mouse events to scrollbar (for desktop browsers)
					$( alphascroll ).bind( 'mousedown', function() {
						$( '.ui-page-active' ).bind( 'mousemove', function( event ) {
							// prevent text selection while scrolling
							$( this ).css({
								"-webkit-user-select" : "none",
								"-moz-user-select"    : "none",
								"-ms-user-select"     : "none",
								"user-select"         : "none"
							});
							// scroll to divider position
							alphaScroll( event.pageY );
						});

						// return page to normal functioning after mouseup
						$( '.ui-page-active' ).bind( 'mouseup', function() {
							// release mousemove event control
							$( '.ui-page-active' ).unbind( 'mousemove' );
							// return text selection to default
							$( this ).css({
								"-webkit-user-select" : "text",
								"-moz-user-select"    : "text",
								"-ms-user-select"     : "text",
								"user-select"         : "text"
							});
						});
					});

					// use short scrollbar if screen is short (like landscape on an iPhone)
					if ( $( window ).height() <= 320  ) {
						truncateScrollbar();
					}
				}

				// handle orientation changes
				$( window ).bind( 'orientationchange', function() {
					$( '.alphascroll' ).unwrap().remove();
					scrollbar = '';
					createScrollbar();
				});

				function truncateScrollbar() {
					$( '.alphascroll li' ).each( function( index, value ) {
						if ( $.inArray( $( this ).html().toLowerCase(), shortAlphabet ) < 0 ) {
							$( this ).html( '&#183;' ).addClass( 'truncated' );
						}
					});
				}

				var current, prev, prevSize, prevHeight, prevLetter;
				
				// do the scroll
				function alphaScroll( y ) {
					$( '.alphascroll-item' ).each( function() {
						if ( ! ( y <= $( this ).offset().top || y >= $( this ).offset().top + $( this ).outerHeight() ) ) {
							var scroll_id = $( this ).attr( 'id' ),
								letter    = scroll_id.split( '-' ),
								target    = $( '.' + letter[1] ),
								position  = target.position(),
								header_height;
			
							// restore font size of character
							if(prev) {							
								$(prev).css('font-size', prevSize);
								$(prev).css('line-height', prevHeight);
								
								/*
								console.log("revert prev font-size: " + $(prev).css('font-size')); 
								console.log("revert prev line-height: " + $(prev).css('line-height')); 
								console.log("------------------------------------------------------");
								*/
							}
							
							/*
							if(prevLetter) {
								console.log("hiding prev list");
								var prevList = $('.' + prevLetter);
								$.each(prevList, function(i) {
									$(prevList[i]).css('display', 'none');
								});
							}
							*/
							
							// make current letter bigger
							current = this;
							prev = current;
							//prevLetter = letter[1];
							prevSize = $(current).css('font-size');
							prevHeight = $(current).css('line-height');
									
							/*
							console.log("id: " + scroll_id + " - letter: " + letter[1]);
							console.log("current size: " + prevSize);
							console.log("current height: " + prevHeight);
							*/
							
							$(current).css('font-size', '3em');
							$(current).css('line-height', '35px');
							
							/*
							console.log("after font-size: " + $(current).css('font-size')); 
							console.log("after line-height: " + $(current).css('line-height')); 
							*/
							
							/*
							if($(current).is('li')) {
								console.log("element is li");
							} else {
								console.log("element is not li");
							}
							*/
							
							// offset scroll-top if header is displayed
							if ( $( '.ui-page-active [data-role="header"]' ).hasClass( 'ui-fixed-hidden' ) ) {
								header_height = 0;
							}
							else {
								header_height = $( '.ui-page-active [data-role="header"]' ).height();
							}

							// scroll the page
							//$.mobile.silentScroll( position.top - header_height );
							
							// show only the matching sublist
							var list = $('#alphabetListID .' + letter[1]);
							console.log("current scroll size: " + list.size());
							/*
							$.each(list, function(i) {
								$(list[i]).css('display', 'block');
							});
							$('#alphabetListID').listview('refresh');
							*/
							
							accepted = $('#acceptedListID').children();
							$.each(accepted, function(i) { 
								console.log("***" + accepted[i].val());
							});
							$('#nameListID').empty();
							$.each(list, function(i) {
								if($.inArray($(list[i]).val(), accepted)) {
									console.log($(list[i]).val());
								}
								var temp = $(list[i]).clone();
								$(temp).attr('id', 'NEW' + $(list[i]).attr('id'));
								//console.log("orig id: " + $(list[i]).attr('id') + " - new id: " + $(temp).attr('id'));
								$('#nameListID').append(temp);
								$(temp).css('display', 'block');
							});
							$('#nameListID').listview('refresh');
						} 
					});
				}
							
				// generate scrollbar on invokation
				createScrollbar();
			});
		}
	});

})( jQuery );