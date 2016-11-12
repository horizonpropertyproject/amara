// JavaScript Document
 $(document).ready(function(){
        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
    $('#dl-menu a').click(function(e) {
      $('#dl-menu').dlmenu('closeMenu'); 
});