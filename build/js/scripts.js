var log = console.log;

(function ($) {
    $(document).ready(function () {
        $('#reports-nav-tab .reports-nav-item>.nav-link').on('click', function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    });
})(jQuery)