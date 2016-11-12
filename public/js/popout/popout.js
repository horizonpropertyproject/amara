function openPopoutDialog() {
    jQuery(function($) {
        $('.overlay').fadeIn('fast', function() {
            $('#box').css('display', 'block');
            $('#box').animate({
                'left' : '28%'
            }, 500);
        });
    });
}

function closePopoutDialog(prospectElementID) {
    jQuery(function($) {
        $(document).ready(function() {
            Set_Cookie('popout', 'it works', '', '/', '', '');
            $('#' + prospectElementID).animate( {
                'left' : '-100%'
            }, 500, function() {
                $('#' + prospectElementID).css('left', '100%');
                $('.overlay').fadeOut('fast');
            });
        });
    });
}


/** ************Default text hide for imput types ************* */
jQuery(function($) {
	
		
    //check for popup cookie if set don't open the dialog.
    if (!Get_Cookie('popout')) {
        window.setTimeout(function() {
            openPopoutDialog();
        // alert('hi');
        }, 3000);
    }
	
});
