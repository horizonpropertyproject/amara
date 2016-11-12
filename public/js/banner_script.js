// JavaScript Document
jQuery(document).ready(function() {
				jQuery('#cptbc_659').carousel({
					interval: 5000				});
			});

			/* <![CDATA[ */
            jQuery(document).ready(function($) {
                'use strict';
 //REVOLUTION SLIDE
                var revapi;
                revapi = jQuery('.tp-banner').revolution(
                        {
                            delay: 5000,
                            startwidth: 1170,
                            startheight: 500,
                            hideThumbs: 10,
                            fullWidth: "on",
                            forceFullWidth: "on",
                            navigationType: "none" // bullet, thumb, none
                        });
 $('.numbers-counter').waypoint(function() {
                    // NUMBERS COUNTER START
                    $('.numbers').data('countToOptions', {
                        formatter: function(value, options) {
                            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                        }
                    });
                    // start timer
                    $('.timer').each(count);
  function count(options) {
                        var $this = $(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    } // NUMBERS COUNTER END
                },
                        {offset: '70%'}
                );
  if (jQuery().prettyPhoto) {
                    piPrettyphoto();
                }
                function piPrettyphoto() {
                    $("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools: false});
                }// PRETTYPHOTO LIGHTBOX END
 $('#portfolio-carousel').carouFredSel({
                    responsive: true,
                    width: '100%',
                    height: '100%',
                    auto: false,
                    scroll: 1,
                    prev: '.c_prev_2',
                    next: '.c_next_2',
                    items: {
                        width: 400,
                        height: '100%',
                        visible: {
                            min: 1,
                            max: 4
                        }
                    }

                });
 });

            /* ]]> */