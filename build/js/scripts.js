/**********************************************
** *** Developer: Debashis Roy Bhowmik *** ****
* *** Email: debashis.buet08@gmail.com *** ****
********* *** Website: debashis.me *** ********
* *** Github: https://github.com/wall-e-08/ ***
***********************************************/
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

    $('#reports-nav .reports-nav-item').on('click', ".nav-link", function(e){
        e.stopPropagation();
        // console.log($(e.currentTarget));
        $('#reports-toggle-btns button:not(.collapsed)').addClass('collapsed').attr('aria-expanded', 'false');
        $('.each-report-details .card-main-heading:not(.collapsed)').addClass('collapsed').attr('aria-expanded', 'false');
        $('.tobecollapse.show').removeClass('collapsing show').addClass('collapse');
        
        // show "personal info" opened
        $('.personal-info>h2').removeClass('collapsed');
        $('.personal-info>.tobecollapse').addClass('show');
    });

    let $add_report = $('#add-reports-tab-btn');
    $add_report.on('click', 'a', function (e) {
        e.preventDefault();
        console.log('prevented from js');
        // add button on top
        // add_report_btn('REQ_1234556', "Positive", "Interpreted");
        
    });

    /* const add_report_btn = (req_nmb, report_state, report_status) => {
        if (report_status.toLowerCase() === 'interpreted') {
            let $cls = '';
        } else if (report_status.toLowerCase() === 'pending') {
            let $cls = 'report-pending';
        } else {
            let $cls = '';
        }
        $add_report.prepend(`
            <li class="nav-item reports-nav-item">
                <a class="nav-link d-block" href="#rnt-1" role="tab">
                    <div class="d-flex">
                        <span class="report-number">${req_nmb}</span>
                        <span class="border border-danger text-danger report-badge">${report_state}</span>
                    </div>
                    <div class="report-status ${$cls}">${report_status}</div>
                </a>
            </li>
        `);
    } */
}