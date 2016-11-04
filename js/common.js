$(function() {

		$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		if ( $(".sticky-wrapper").css('height') == '72px'){
			$(".sticky-wrapper").css({"height":"185px"});
		}
		else {
			$(".sticky-wrapper").css({"height":"72px"});
		}
  		$("#top-menu nav").slideToggle();
  		return false;
	});

		$('.slider1').bxSlider({
    slideWidth: 150,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 10,
    responsive: true
  });

$(".fancybox").fancybox();

		$("#top-menu").sticky({topSpacing:0});

		$( '#cd-dropdown' ).dropdown( {
					gutter : 5
				} );

		$( '#cd-dropdown-2' ).dropdown( {
					gutter : 5
				} );
});


$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop()>100)
			{  
			$("#top-menu").css({"background-color":"rgba(238, 238, 238, 1)"});      
			}
		else
			{
			$("#top-menu").css({"background-color":"rgba(238, 238, 238, 0)"});      
			}
	});

	$('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-80 }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

    (function($){
$(function() {

  $('span.jQtooltip').each(function() {
    var el = $(this);
    var title = el.attr('title');
    if (title && title != '') {
      el.attr('title', '').append('<div>' + title + '</div>');
      var width = el.find('div').width();
      var height = el.find('div').height();
      el.hover(
        function() {
          el.find('div')
            .clearQueue()
            .animate({width: width + 20, height: height + 20}, 200).show(200)
            .animate({width: width, height: height}, 200);
        },
        function() {
          el.find('div')
            .animate({width: width + 20, height: height + 20}, 150)
            .animate({width: 'hide', height: 'hide'}, 150);
        }
      ).mouseleave(function() {
        if (el.children().is(':hidden')) el.find('div').clearQueue();
      });
    }
  })

})
})(jQuery)