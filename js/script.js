$(document).ready(function (){
    $('.js-select').selectric();

    $('.header-burger').on('click', function(event){
        $('html').addClass('is-nav-open');
        $('.nav').addClass('is-open');
    });
    $('.nav-close').on('click', function(event){
        $('html').removeClass('is-nav-open');
        $('.nav').removeClass('is-open');
    });

    $('.catalog__sort-drop-title').on('click', function(event){
        $(this).parent().toggleClass('open');
    });

    $('.js-filter').on('click', function(event){
        $('.catalog__filter').addClass('open');
    });
    $('.js-filter-close').on('click', function(event){
        $('.catalog__filter').removeClass('open');
    });

    $('.lk').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
    }

    function initListeners() {
        $("#phone2").on("blur", validatePhone);
        $("#name").on("blur", validateName);
        $(".submitBtn").on("click", validateForm);
    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone2").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    /*function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }*/


    function validateName() {
        var emailAddress = $("#name").val();
        var pattern = new RegExp(
            /[A-Za-z]/
        );
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateForm() {
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone2").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone2").removeClass("invalid");
        }


        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }
    }

    /*$('.js-catalog-item-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: true
    });*/

    $('.slider-for').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true
    });

    $('.js-rek-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-ab-main-slider, .js-all-main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
    });

    var imgs = $('.js-ab-main-slider img, .js-all-main-slider img');
    imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
            'background-image': 'url(' + $(this).attr('src') + ')',
            'background-position': 'center',
            '-webkit-background-size': 'cover',
            'background-size': 'cover',
        });
        $(this).hide();
    });


    ymaps.ready(init);
    function init () {
        var myMap3 = new ymaps.Map("map", {
            center: [55.756710, 37.562542],
            zoom: 13,
            controls: ["zoomControl"]
        });

        myMap3.controls.add('fullscreenControl', {float: 'left'});
        myGeoObject = new ymaps.GeoObject();
        myMap3.geoObjects
            .add(new ymaps.Placemark([55.756710, 37.562542], {
            }, {
                iconLayout: 'default#image'
            }))


        var myMap2 = new ymaps.Map("map2", {
            center: [59.953164, 30.263011],
            zoom: 13,
            controls: ["zoomControl"]
        });

        myMap2.controls.add('fullscreenControl', {float: 'left'});
        myGeoObject = new ymaps.GeoObject();
        myMap2.geoObjects
            .add(new ymaps.Placemark([59.953164, 30.263011], {
            }, {
                iconLayout: 'default#image'
            }))
    }


   /* $(function(){
        var speed = 1000,
            $li;

        $('.js-catalog-item-slider').on('init', function(slick) {
            $(slick.target).find('button').append('<span></span>');

            $li = $(slick.target).find('.slick-dots li');
            animateSpan(0, $li);
        });


        $('.js-catalog-item-slider').slick({
            dots: true,
            autoplay: false,
            autoplaySpeed: speed,
            arrows: false
        });

        $('.js-catalog-item-slider').mouseover(function() {
            $(this).slick('play')
        });
        $('.js-catalog-item-slider').mouseout(function() {
            $(this).slick('pause')
        });

        $('.js-catalog-item-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $li.find('button span').stop(true, true);
            $li.find('button').removeClass('filled');

            if(currentSlide == 0) {
                $li.find('button span').css({
                    'transform': 'scaleX(0)',
                    'border-spacing': 0
                });
            } else {
                // всем до текущего слайда назначить класс, чтобы они были заполнены
                for(var i = 0; i < currentSlide; i++) {
                    $li.eq(i).find('button').addClass('filled');
                }

                // всем после текущего слайда убрать классы и ширину, чтобы были пустыми

                for(var i = currentSlide + 1; i < $li.length + 1; i++) {
                    $li.eq(i - 1).find('button').removeClass('filled')
                        .find('span').css({
                        'transform': 'scaleX(0)',
                        'border-spacing': 0
                    });
                }
            }

            animateSpan(currentSlide, $li);
        });

        function animateSpan(currentSlide, $li) {
            var $currentBtn = $li.eq(currentSlide).find('span');

            $currentBtn.animate({  borderSpacing: 1 }, {
                step: function(now, fx) {
                    $(this).css('transform', 'scaleX('+ now +')');
                },
                duration: speed
            }, 'linear');
        }
    })*/


});


