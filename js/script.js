$(document).ready(function(){
	var navbar = $('.navbar');
	var navItem = $('nav a.nav-link'); 
	var navIcon = $('nav i');
	var scrollState = false;
	var view = $(window);
	var header = $('.header');
	var hello = $('.hello');
	var helloTitleHeight = $('.hello-title').height();

	//nav onscroll
	$(window).on('scroll',function(){
		//parallax();
		if($(window).scrollTop() > 0){
			if(scrollState === false){
				scrollState = true;
				navbar.css('background','gainsboro');
			}
		}else{
			if(scrollState === true){
				scrollState = false;
				navbar.css('background','rgba(220,220,220,0.6)');
			}
		}
	})
	//menu chevron botton
	var colorChanged = false;
	$('#nav-chevron').click(function(){
		if(view.scrollTop()===0 && colorChanged === false){
			navbar.css('background','gainsboro');
			colorChanged = true;
		}else{
			if(view.scrollTop()===0 && colorChanged === true){
				navbar.css('background','rgba(220,220,220,0.6)');
				colorChanged = false;
			}
		}
	})
	
	//Layout Change On Resize
	//offset hello
	if(view.innerWidth()>550){
		header.css('height',view.height()-hello.height()-helloTitleHeight-22+'px');
		hello.css('top',$('.hello').innerHeight()-helloTitleHeight-22+'px');
	}else{
		header.css('height',view.height()-helloTitleHeight-22+'px');
		hello.css('top','0');
		$('.mobile-view').removeClass('container')		
	}
	view.resize(function(){
		var bgState = false;
		//console.log(view.width());
		if(view.innerWidth()>550 && bgState === false){
			bgState= true;
			header.css('height',view.height()-hello.height()-helloTitleHeight-22+'px');
			hello.css('top',$('.hello').innerHeight()-helloTitleHeight-22+'px');
			console.log(view.width());
		}else{
			if(bgState === true){

			}
			//helloBg.css('')
			header.css('height',view.height()-helloTitleHeight-22+'px');
			hello.css('top','0');
		}
	});

	//smooth scroll
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	//hidden section
	var hobbyState = false;
	$('.gear i').click(function(){
		
		if(hobbyState === false){
			$('.hobby').css('display','initial');
			hobbyState = true;
		}
		else{
			$('.hobby').css('display','none');
			hobbyState = false;
		}
	})

	//connection animation
	$('.social .fa-envelope').hover(function(){
		$(this).addClass('fa-envelope-open');
	}, function(){
		$(this).removeClass('fa-envelope-open');
	});
})
