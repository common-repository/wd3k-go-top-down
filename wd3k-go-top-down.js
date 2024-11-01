(function(){
            var special = jQuery.event.special,
                uid1 = 'D' + (+new Date()),
                uid2 = 'D' + (+new Date() + 1);

                special.scrollstart = {
                    setup: function() {

                        var timer,
                            handler =  function(evt) {

                                var _self = this,
                                    _args = arguments;

                                if (timer) {
                                    clearTimeout(timer);
                                } else {
                                    evt.type = 'scrollstart';
                                    jQuery.event.handle.apply(_self, _args);
                                }

                                timer = setTimeout( function(){
                                    timer = null;
                                }, special.scrollstop.latency);

                            };

                        jQuery(this).bind('scroll', handler).data(uid1, handler);

                    },
                    teardown: function(){
                        jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
                    }
                };

                special.scrollstop = {
                    latency: 300,
                    setup: function() {

                        var timer,
                                handler = function(evt) {

                                var _self = this,
                                    _args = arguments;

                                if (timer) {
                                    clearTimeout(timer);
                                }

                                timer = setTimeout( function(){

                                    timer = null;
                                    evt.type = 'scrollstop';
                                    jQuery.event.handle.apply(_self, _args);

                                }, special.scrollstop.latency);

                            };

                        jQuery(this).bind('scroll', handler).data(uid2, handler);

                    },
                    teardown: function() {
                        jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
                    }
                };
})();

            jQuery().ready(function($) {
                $('#nav_up').css({'opacity':'0.2'});
                $('#nav_down').css({'opacity':'0.2'});
                $(window).bind('scrollstart', function(){
                    //$('#nav_up').stop().animate({'opacity':'0.2'});
                    //$('#nav_down').stop().animate({'opacity':'0.2'});
                });
                $(window).bind('scrollstop', function(){
                    //$('#nav_up').stop().animate({'opacity':'1'});
                    //$('#nav_down').stop().animate({'opacity':'1'});
                });
                $('#nav_down').mouseover(function(){
                    $('#nav_down').stop().animate({'opacity':'1'});
                });
                $('#nav_down').mouseleave(function(){
                    $('#nav_down').stop().animate({'opacity':'0.2'});
                });
                $('#nav_up').mouseover(function(){
                    $('#nav_up').stop().animate({'opacity':'1'});
                });
                $('#nav_up').mouseleave(function(){
                    $('#nav_up').stop().animate({'opacity':'0.2'});
                });
                $('#nav_down').click(function(){
                    $('html').animate({scrollTop: $(document).height()}, 'slow');
                    $('body').animate({scrollTop: $(document).height()}, 'slow');
                });

                $('#nav_up').click(function(){
                    $('html').animate({scrollTop:0}, 'slow');//IE, FF
                    $('body').animate({scrollTop:0}, 'slow');
                });

                /*$(window).scroll(function() {
                    if ($(this).scrollTop()) {
                        $('#nav_up:hidden').stop(true, true).fadeIn();
                    } else {
                        $('#nav_up').stop(true, true).fadeOut();
                    }
                });*/
            });