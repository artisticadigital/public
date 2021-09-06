jQuery(document).ready(function () {

jQuery('body').append('<div class="cominfo_switch"><form action=""><label>Coms<input id="coms" type="checkbox"></label><br><label>Hs<input id="hs" type="checkbox"></label></form></div>');
    jQuery('component:not(.comDH)').each(function () {
                    var comclass = jQuery(this).attr('class');
                    var comtype = jQuery(this).data("comtype");
                    jQuery(this).append('<div class="cominfo"><span class="comclass">' + comclass + '</span><span class="comtype">' + comtype + '</span></div>');
                });
    jQuery('.cominfo_switch form input#coms').on('change', function () {
        if (jQuery(this).is(':checked')) {
            jQuery('body').addClass('cominfo_on');
            if (jQuery('body').hasClass('cominfo_on')) {
                
            }
        } else if (!jQuery(this).is(':checked')){
            jQuery('body').removeClass('cominfo_on');
        }
    });
    jQuery('.cominfo_switch form input#hs').on('change', function () {
        if (jQuery(this).is(':checked')) {
            jQuery('h1, h2, h3, h4, h5, h6, p').each(function(){
            var htype = jQuery(this).prop('nodeName');
            jQuery(this).append('<span class="htype">' + htype + '</span>');
        });
        } else if (!jQuery(this).is(':checked')){
            jQuery('.htype').remove();
        }
    });
 });