/**********************************************
** *** Developer: Debashis Roy Bhowmik *** ****
* *** Email: debashis.buet08@gmail.com *** ****
********* *** Website: debashis.me *** ********
* *** Github: https://github.com/wall-e-08/ ***
***********************************************/


(function ($) {
    $(function () {
        // jquery-datepicker init, documentation url: https://api.jqueryui.com/datepicker/
        $('.jqui-datepicker').datepicker({
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
        });
    });
})(jQuery);