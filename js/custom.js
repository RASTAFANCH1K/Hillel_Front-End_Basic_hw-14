document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById("preloader");
		if ( !preloader.classList.contains("done") )
		{
			preloader.classList.add("done")
		}
	}, 1000);
}

$(document).ready(function() {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
				$("#header").css("background-color","#0eb493");
				$("#nav").css("background-color","#0eb493");
				$("#nav").css("border-top","1px solid #fff");
				$("#nav a").css("border-bottom","1px solid #fff");
		} else {
				$("#header").css("background-color","rgba(16, 22, 54, 0.2)");
				$("#nav").css("background-color","rgba(16, 22, 54, 0.2)");
				$("#nav").css("border-top","1px solid #000");
				$("#nav a").css("border-bottom","1px solid #000");
		}
	});
	
	$('#nav-opener').on('click', function(e) {
		e.preventDefault();
		$('#header').toggleClass('nav-active')
	});
	
	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
	var wow = new WOW ({
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       120,
		mobile:       false,
		live:         true
	});
	wow.init();
	
	$('#hero-items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
	
	$('#service-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	
	var mixer = mixitup('#gallery');

	$('#team-members').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	
	(function ($) {
		var o = $('.timer');
		var cc = 1;
		if (o.length > 0) {
			$(window).scroll(function(){
				var targetPos = o.offset().top;
				var winHeight = $(window).height();
				var scrollToElem = targetPos - winHeight;
				var winScrollTop = $(this).scrollTop();
				if (winScrollTop > scrollToElem) {
					if (cc < 2){
						cc = cc + 2;
						$(document).ready(function () {
							$(o).countTo({
								speed: 3000,
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals);
								},
								onUpdate: function (value) {
									console.debug(this);
								},
								onComplete: function (value) {
									console.debug(this);
								}
							});
						});
					}
				}
			});
		}
	})(jQuery);

	var GM = {
		init: function () {
			this.initCache();
			this.initMap();
		},

		initCache: function() {
			this.$body = $('body');
		},

		initMap: function () {
			var coordinates = {lat: 38.922991, lng: -77.413423},
			zoom = 15,
			map = new google.maps.Map(document.getElementById('map'), {
				center: coordinates,
				zoom: zoom,
				disableDefaultUI: true,
				scrollwheel: false
			}),
			marker = new google.maps.Marker({
				position: coordinates,
				map: map,
				icon: 'img/custom-pin.png',
				animation: google.maps.Animation.BOUNCE
			});
		}
	};
	$(document).ready(function() {
		GM.init();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
				$("#back-top").fadeIn(200)
		} else {
				$("#back-top").fadeOut(200)
		}
	});
	
	$("#back-top").click(function () {
			$("html, body").stop().animate({
					scrollTop: 0
			}, 1500, "easeInOutExpo")
	});
});