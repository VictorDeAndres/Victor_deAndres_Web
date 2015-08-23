function getTechCardHeight() {
  var elementHeight = $('.TechCard').css('height');
  return elementHeight;
}

function setResumeCardHeight() {
  $('.ResumeCard').css('height', getTechCardHeight());
}

function getProjectSlideHeight() {
    var elementProjectSlide = parseInt( $( '.slide' ).css( 'height' ));
    var elementNavbar = parseInt( $( '.navbar' ).css( 'height' ));
    var elementFooter = parseInt( $( '#AppFooter' ).css( 'height' ));
    var elementTitle = parseInt( $( '.TitleSlide' ).outerHeight( true ));
    return elementProjectSlide - elementNavbar -  elementFooter - elementTitle;
}

function setProjectSlideHeight() {
    $( '.ExperienceSlide' ).css( 'height',  getProjectSlideHeight() );
}

function setSlideArrowHeight() {
    var elementHeight = getProjectSlideHeight();
    $( '#slideContainer' ).css( 'height', elementHeight );
    var elementCenterPostion = parseInt(elementHeight / 2) - parseInt(100 / 2);
    $(' .Arrow' ).css( 'top', elementCenterPostion);
    var elementArrowWidth = parseInt( $( '.Arrow' ).css( 'width' )) ;
    $(' .Arrow#Left' ).css( 'margin-left', parseInt(elementArrowWidth / 2));
    $(' .Arrow#Right' ).css( 'margin-right', parseInt(elementArrowWidth / 2));
}

$( "#ComeIn" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutMeSlide").offset().top
    }, 500);

});

$( "#linktoaboutme" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutMeSlide").offset().top
    }, 500);
});

$( "#linktoportfolio" ).click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#ProjectSlide").offset().top
    }, 500);
});

$( "#linktocontacta" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactSlide").offset().top
    }, 500);
});

$( "#Mail" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactSlide").offset().top
    }, 500);
});

$( window ).bind("load", function() {
	setResumeCardHeight();
    setProjectSlideHeight();
    setSlideArrowHeight();
});

$( window ).resize(function() {
    setResumeCardHeight();
    setProjectSlideHeight();
    setSlideArrowHeight();    
});