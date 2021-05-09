//scroll parallax
var parallax1 =
    document.getElementById('imagen1');


function scrollParallax1() {
    var scrollTop =
        document.documentElement.scrollTop;
    parallax1.style.transform =
        'translateY(' + scrollTop * -0.4 + 'px)';
}

window.addEventListener('scroll', scrollParallax1);


var parallax2 =
    document.getElementById('imagen2');


function scrollParallax2() {
    var scrollTop =
        document.documentElement.scrollTop;
    parallax2.style.transform =
        'translateY(' + scrollTop * -0.4 + 'px)';
}

window.addEventListener('scroll', scrollParallax2);

//slider jqueri

var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');


$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
slider.css('margin-left', '-' + 100 + '%');

function moverD() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 700, function() {
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

function moverI() {
    slider.animate({
        marginLeft: 0
    }, 700, function() {
        $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

function autoplay() {
    interval = setInterval(function() {
        moverD();
    }, 5000);
}
siguiente.on('click', function() {
    moverD();
    clearInterval(interval);
    autoplay();
});

anterior.on('click', function() {
    moverI();
    clearInterval(interval);
    autoplay();
});


autoplay();