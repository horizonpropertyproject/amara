jQuery(document).ready(function() {

	//show modal
  // if (jQuery(window).width() > 768 ) {
     jQuery('#modalCallBack').modal('show');
  // }


	// delegate calls to data-toggle="lightbox"
	// $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	// 	event.preventDefault();
	// 	return $(this).ekkoLightbox({
	// 		always_show_close: true
	// 	});
	// });
});


//hide right
jQuery('#show-left, #left-close').on('click', function(e) {
  jQuery(".left-sidebar-form").toggleClass('hide-left');
  e.preventDefault();
});

jQuery('#show-right, #close-right').on('click', function(e) {
	jQuery(".right-sidebar-form").toggleClass('hide-right');
	e.preventDefault();
});

if (jQuery(window).width() < 768 ) {
  jQuery(".right-sidebar-form").toggleClass('hide-right');
}

jQuery('table a').on('click', function(e) {
	jQuery('#modalGetBrochure').modal('toggle');
	e.preventDefault();
});

// jQuery('p').readmore({
//   speed: 75,
//   maxHeight: 80
// });

jQuery(function() {

  jQuery('.navbar a[href*=#]:not([href=#])').click(function() {

    //jQuery('#modalCallBack').modal('show');

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(function() {
    jQuery('.nav a').on('click', function(){ 
        if(jQuery('.navbar-toggle').css('display') !='none'){
            jQuery(".navbar-toggle").trigger( "click" );
        }
    });
});

jQuery(document).on('show','.panel-collapse', function (e) {
         //$('.accordion-heading i').toggleClass(' ');
         jQuery(e.target).prev('.panel-title').addClass('accordion-opened');
    });
    
    jQuery(document).on('hide','.panel-collapse', function (e) {
        jQuery(this).find('.panel-title').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
    });

function blinker() {
    jQuery('.glyphicon-earphone').fadeOut(500);
    jQuery('.glyphicon-earphone').fadeIn(500);
}

setInterval(blinker, 500);

jQuery('form').on('submit', function() {
  var name, email, mobile, message = '';

  name    = (jQuery(this['name']).length) ? this['name'].value : null;
  email   = (jQuery(this['email']).length) ? this['email'].value : null;
  mobile  = (jQuery(this['phone']).length) ? this['phone'].value : null;
  message = (jQuery(this['message']).length) ? this['message'].value : null;
  project = (jQuery(this['project']).length) ? this['project'].value : jQuery(document).find("title").text();

  var lead = {
    name: name,
    email: email,
    mobile: mobile,
    message: message,
    project: project
  };

  jQuery.ajax({
    type: "post",
    url: 'http://crm.manishalifespaces.com/lead',
    data: lead,
    success: function (data, status, jqXHR) {
      //console.log(data);
    },
    error: function (jqXHR, status) {
      // error handler
      //console.log(jqXHR);
    }
  });
});

var redirect = function() {
  location.replace('thank-you');
}