
(function($) {

	"use strict"
	
	/* - Menu Switch * */
	function menu_switch(){
		var width = $(window).width();
		if( width > 991 ) {
			$(".menu-switch > a").on("click", function() {
				$(".ownavigation .navbar-nav").toggleClass("menu-open")
			});
		} else {
			$(".ownavigation .navbar-nav").removeClass("menu-open");
		}
	}
	

	/* - Responsive Caret* */
	function menu_dropdown_open(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".ownavigation .nav li.ddl-active").length ) {
				$(".ownavigation .nav > li").removeClass("ddl-active");
				$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
		}
	}
	

	
	
	function sticky_menu() {
		var menu_scroll = $('header[class*="header_s"]').offset().top;
		var scroll_top = $(window).scrollTop();
		
		if ( scroll_top > menu_scroll ) {
			$(".header_s .ownavigation").addClass("navbar-fixed-top animated fadeInDown");
		} else {
			$(".header_s .ownavigation").removeClass("navbar-fixed-top animated fadeInDown"); 
		}
	}


	$(document).ready(function($) {

	
		var width	=	$(window).width();
		var height	=	$(window).height();
		
	
		if( $(".header_s .ownavigation").length ) {
			sticky_menu();
		}
		
	
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		$("#closeit").on("click", function() {
			$("#slidepanel").slideUp("slow");
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		
		/* - Color Switcher */
		if( $('#choose_style').length ) {

			 $("#default").on("click", function() {
				$("#color" ).attr("href","assets/css/color-schemes/default.css");
				return false;
			});

			

			// picker buttton
			$(".picker_close").on("click", function() {
				$("#choose_style").toggleClass("position");
			});
		}
		
		$(".color-switcher-block li a").on("click", function() {
			$(".color-switcher-block li").removeClass("active");
			$(this).parent().addClass("active");
		});
		
		
		
		/* - Rev Slider */
		if($(".slider-section").length){
			$("#home-slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:6000,
				navigation: {
					arrows:{
						enable:true,
						style:"uranus"
					},
					bullets: {
						enable:true,
						style:"zeus",
						hide_onleave:false,						
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:-45,
						space:10,
						tmp:''
					}
				},
				responsiveLevels:[1920,1024,768,480],
				gridwidth:[1920,1024,768,480],
				gridheight:[989,800,700,480]
			});
		}
		
	
		/* - Testimonial Slider */			
		$(".testimonial-slider").slick({
			centerMode: true,
			centerPadding: "190px",
			slidesToShow: 3,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1366,
					settings: {
						centerPadding: "90px",
					}
				},
				{
					breakpoint: 1200,
					settings: {
						centerPadding: "0",
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: "0",
						slidesToShow: 1
					}
				}
			]
		});

		/* - Questiong Form */
		$( "#que_btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "question.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg-que").html(data["msg"]);
						$("#alert-msg-que").removeClass("alert-msg-success");
						$("#alert-msg-que").addClass("alert-msg-failure");
						$("#alert-msg-que").show();
					} else {
						$("#alert-msg-que").html(data["msg"]);
						$("#alert-msg-que").addClass("alert-msg-success");
						$("#alert-msg-que").removeClass("alert-msg-failure");					
						$("#input_fname").val("");
						$("#input_email").val("");
						$("#input_subject").val("");
						$("#input_message").val("");
						$("#alert-msg-que").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
		});/* - Questiong Form *- */
		
		/* - Appointment Form */
		$( "#appointment_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "appointment.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#appointment-alert-msg").html(data["msg"]);
						$("#appointment-alert-msg").removeClass("alert-msg-success");
						$("#appointment-alert-msg").addClass("alert-msg-failure");
						$("#appointment-alert-msg").show();
					} else {
						$("#appointment-alert-msg").html(data["msg"]);
						$("#appointment-alert-msg").addClass("alert-msg-success");
						$("#appointment-alert-msg").removeClass("alert-msg-failure");					
						$("#patient_name").val("");
						$("#patient_email").val("");
						$("#patient_date").val("");
						$("#patient_time").val("");
						$("#patient_department").val("");
						$("#patient_message").val("");
						$("#appointment-alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
		});/* - Appointment Form /- */
		
	});	/* - Document Ready /- */
	
	/* Event - Window Scroll */
	$(window).on("scroll",function() {
		/* - Set Sticky Menu* */
		if( $(".header_s .ownavigation").length ) {
			sticky_menu();
		}
	});
	
	$( window ).on("resize",function() {
		
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Expand Panel Resize */
		panel_resize();
		
		/* - Menu Switch */
		if($(".menu-switch").length){
			menu_switch();
		}
		
		/* - Menu Triangle */
		menu_triangle();
		
	});
	
	/* ## Window Load - Handler for .load() called */
	$(window).on("load",function() {
		/* - Site Loader* */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		
		
		
	});

})(jQuery);