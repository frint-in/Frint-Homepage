function customPopup() {

    let $btnShowPopup = $('.js-open-popup');
    let $btnClosePopup = $('.js-close-popup');
    let $popup1 = $('.js-custom-popup-login');
    let $popup2 = $('.js-custom-popup-register');
    let $popup3 = $('.js-custom-popup-primary');

    $btnShowPopup.on('click', function () {

        let targetPopup = $(this).attr('data-target');
        $("[data-popup=" + targetPopup + "]").addClass('is-active');

    });

    $btnClosePopup.on('click', function () {
        $(this).parents('.is-active').removeClass('is-active');
    });

    $popup1.on('click', function (event) {
        if (!$(event.target).closest('.js-custom-popup-holder').length && !$(event.target).is('js-custom-popup-login')) {
            if ($popup1.hasClass('is-active')) {
                $popup1.removeClass('is-active');
            }
        }
    });
    $popup2.on('click', function (event) {
        if (!$(event.target).closest('.js-custom-popup-holder').length && !$(event.target).is('js-custom-popup-register')) {
            if ($popup2.hasClass('is-active')) {
                $popup2.removeClass('is-active');
            }
        }
    });
    $popup3.on('click', function (event) {
        if (!$(event.target).closest('.js-custom-popup-holder').length && !$(event.target).is('js-custom-popup-primary')) {
            if ($popup3.hasClass('is-active')) {
                $popup3.removeClass('is-active');
            }
        }
    });

}
customPopup();