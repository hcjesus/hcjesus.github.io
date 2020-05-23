$(()=>{
	//load page
	$("a").on('click', function(event) {
		
		if(this.hash !== ""){
			event.preventDefault();
			
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top 
			}, 800, () =>{
				window.location.hash = hash;
			} );	
		}
	});

});



const parallaxElements = $('.parallax'), parallaxQuantity = parallaxElements.length;
$('.header').css('background-position', 'left 0px');
$(window).on('scroll', e =>{
	window.requestAnimationFrame(() => {
		for (let i = 0; i < parallaxQuantity; i++){
			const currentElement = parallaxElements.eq(i);
			let scrolled = $(window).scrollTop();
			currentElement.css('background-position', 'left ' + (-1 * (parseInt($(window).scrollTop()) / 20)) + 'px');
		}
	});
	
});