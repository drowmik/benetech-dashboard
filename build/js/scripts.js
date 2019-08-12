var log = console.log;

(function ($) {
    $(document).ready(function () {
        main();
    });
})(jQuery)


const main = () => {
    // phone number mask
    $('.phn-mask').mask('(0000) 0000000000');

    $('#reports-nav .reports-nav-item>.nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#filter-show-adv-search').on('click', function (e) {
        e.preventDefault();
        let txt = $(this).html(),
            target_item = $('#advanced-options').parent();
        if (target_item.is(':visible')) {
            // if advanced options is showed 
            // (which is going to close after this operation)
            // change text to "show advanced search"
            txt = txt.replace(/^(\w+)/, 'Show'); // change first character to 'Show'
        } else {
            txt = txt.replace(/^(\w+)/, 'Hide'); // change first character to 'Hide'
        }
        $(this).html(txt);  // update the html
        target_item.slideToggle();
    });

    $('input.cross-on-type').on('keyup', function () {
        let $parent = $(this).parent(), // typically the parent is: '.form-group'
            $len = $(this).val().length;
        if ($len && !$parent.hasClass('cross-show')) {
            // if input field has value and cross button didn't exists, show it
            $parent.addClass('cross-show').append('<span></span>');
        } else if(!$len) {
            // if empty input value
            $parent.removeClass('cross-show').children('span').remove();
        }
    });

    $('.form-group').on('click', 'span', function () {
        $(this).siblings('input').val('').parent().removeClass('cross-show');
        $(this).remove();
    });
}