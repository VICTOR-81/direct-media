(function ($) {
	"use strict";
	/*********************************
    /* Table of Context
    /* *******************************
    /* 
    /* Preloader
    /* Sticky Navbar
    /* Scroll Top Bar
    /* Mobile Menu Expand
    /* Mobile Menu Flyout Menu
    /* Counter Up
	/* Testimonial Slider
    /* Service Tab
    /* Nice Select2
    /* Add/Minus Quantity
    /* Product Gallery Slider
    /* Google Map Script
    *********************************/

	/*********************************
    /* Preloader Start
    *********************************/
	$(window).on("load", function () {
		$("#status").fadeOut();
		$("#preloader").delay(500).fadeOut("slow");
		$("body").delay(500).css({ overflow: "visible" });
	});

	/*********************************
    /* Sticky Navbar
    *********************************/
	// var headerHeight = $("header .header__topBar").outerHeight();
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		var sticky = $(".header");
		if (scrolling >= 114) {
			$(sticky).addClass("header__sticky");
		} else if (scrolling >= 80) {
			$(sticky).addClass("header__sticky");
		} else if (scrolling > 0) {
			$(sticky).addClass("header__sticky");
		} else {
			$(sticky).removeClass("header__sticky");
		}
	});

	/*********************************
    /*  Scroll Top Bar
    *********************************/
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".scroll-to-target").removeClass("open");
		} else {
			$(".scroll-to-target").addClass("open");
		}
	});

	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top,
				},
				500
			);
		});
	}

	/*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
	$(".toggler__btn").on("click", function (event) {
		event.preventDefault();
		$(".flyoutMenu").toggleClass("active");
	});
	$(".closest__btn").on("click", function (event) {
		event.preventDefault();
		$(".flyoutMenu").toggleClass("active");
	});

	$(document).on("click", function (e) {
		if ($(e.target).closest(".flyout__inner").length === 0 && $(e.target).closest(".toggler__btn").length === 0) {
			$(".flyoutMenu").removeClass("active");
		}
	});

	/*********************************
    /*  Mobile Menu Expand
    *********************************/
	$(".flyout-main__menu .nav__link").on("click", function (event) {
		event.preventDefault();
		// $(".has__dropdown").find(".sub__menu").slideUp();
		$(this).parent(".has__dropdown").find(".sub__menu").slideToggle();
	});

	$(".flyout-main__menu .sub__menu .nav__link").on("click", function (event) {
		event.preventDefault();
		$(this).parent(".has__dropdown").find(".sub__sub-menu").slideToggle();
	});

	/*********************************
    /*  Counter js
    *********************************/
	if ($(".counter").length > 0) {
		$(".counter").counterUp();
	}

	/*********************************
    /*  Testimonial Slider
    *********************************/
	var slider = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		loopedSlides: 6,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	var thumbs = new Swiper(".testimonial-thumbs", {
		slidesPerView: "auto",
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
		slidesPerView: 5,
	});

	slider.controller.control = thumbs;
	thumbs.controller.control = slider;

	/*********************************
    /*  Service Tab pane Slider Script
    *********************************/
	if ($(".service__tab").length > 0) {
		var service__tab = new Swiper(".service__tab>.tab__pane", {
			spaceBetween: 30,
			slidesPerView: 5,
			grabCursor: true,
			// loop: true,
			// centeredSlides: true,
			breakpoints: {
				0: {
					slidesPerView: 3,
					spaceBetween: 8,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},
		});
	}

	// popup open/close function
	$(".tab__wrapper .tab__pane__item").on("click", function () {
		let target = $(this).data("target");
		$(".tab__pane__item").removeClass("active");
		$(this).addClass("active");
		$(".tab__content .tab__item").each(function () {
			if (target === $(this).data("area")) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	});

	/*********************************
    /*  Nice Select 2
    *********************************/
	if ($(".blog-select, .find-service-loc").length > 0) {
		$(".blog-select, .find-service-loc").select2({
			tags: true,
		});
	}

	if ($(".select-2.only-dropdown").length > 0) {
		$(".select-2.only-dropdown").select2({
			minimumResultsForSearch: Infinity,
		});
	}

	/*********************************
    //*Add/Minus Quantity
    *********************************/
	$(".incressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal)) {
			$qty.val(currentVal + 1);
		}
	});
	$(".decressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$qty.val(currentVal - 1);
		}
	});

	/*********************************
    /*  ProductGallerySwiper Slider
    *********************************/
	if ($(".swiper-container").length > 0) {
		var galleryTop = new Swiper(".gallery-top", {
			spaceBetween: 10,
			loop: true,
			loopedSlides: 4,
			grabCursor: true,
		});

		var galleryThumbs = new Swiper(".gallery-thumbs", {
			spaceBetween: 10,
			slidesPerView: 4,
			grabCursor: true,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			loopedSlides: 4,
			direction: "horizontal",
			centeredSlides: true,
		});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
	}

	/*********************************
    /*  Google Map Script
    *********************************/
	function init() {
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 10,
			center: new google.maps.LatLng(23.810331, 90.412521),
			mapTypeId: google.maps.MapTypeId.ROADMAP,

			styles: [
				{ featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] },
				{ featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] },
				{ featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] },
				{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }] },
				{ featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] },
				{ featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] },
				{ featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] },
				{ featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] },
				{ elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] },
				{ elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] },
				{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },
				{ featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] },
				{ featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] },
				{ featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] },
			],
		});
	}

	if ($("#map").length > 0) {
		google.maps.event.addDomListener(window, "load", init);
	}
})(jQuery);
