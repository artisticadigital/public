jQuery(document).ready(function () {

jQuery('body').append('<div class="cominfo_switch"><form action=""><input type="checkbox"></form></div>');
    jQuery('component:not(.comDH)').each(function () {
                    var comclass = jQuery(this).attr('class');
                    var comtype = jQuery(this).data("comtype");
                    jQuery(this).append('<div class="cominfo"><span class="comclass">' + comclass + '</span><span class="comtype">' + comtype + '</span></div>');
                });
    jQuery('.cominfo_switch form input').on('change', function () {
        if (jQuery(this).is(':checked')) {
            jQuery('body').addClass('cominfo_on');
            if (jQuery('body').hasClass('cominfo_on')) {
                
            }
        } else if (!jQuery(this).is(':checked')){
            jQuery('body').removeClass('cominfo_on');
        }
    });
 });