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


    ymaps.ready(init);
    function init () {
        var myMap3 = new ymaps.Map("map", {
            center: [55.756710, 37.562542],
            zoom: 13,
            controls: ["zoomControl"]
        });

        myMap3.controls.add('fullscreenControl', {float: 'left'});
        // Создаем геообъект с типом геометрии "Точка".
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
        // Создаем геообъект с типом2 геометрии "Точка".
        myGeoObject = new ymaps.GeoObject();
        myMap2.geoObjects
            .add(new ymaps.Placemark([59.953164, 30.263011], {
            }, {
                iconLayout: 'default#image'
            }))
    }

});


