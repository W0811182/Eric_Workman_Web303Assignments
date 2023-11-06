(function($) {
    // VARIABLES
    $.fn.photoViewer = function() {                                             // i wasn't able to get the photoviewer working is it possible it could be brought up briefly on tuesday?

        return this.each(function () {
        var request;                                //Last image request
        var $current;                               //Current image
        var cache= {};
        var $img;                                    //local image var
        var src = this.href;                              //Cache object
        var $frame = $('#photo-box');               // Container
        var $thumbs= $('.thumbnails');              //Container


        
        //CROSS FADE FUNCTION
        function cF($img) {                         //New image as param

            if($current) {                          //If there is an image already showing
                $current.stop().fadeOut('slow');    //stop and fade out
            }

            $img.css({                              //set css for the img tag
                marginLeft: -$img.width() / 2,      //Negative margin 1/2 the image width
                marginTop: -$img.height() / 2       //Negative margin 1/2 the image height
            });

            $img.stop().fadeTo('slow', 1);          // stop and fade in

            $current = $img;                        // make this new image the current one
        }

       $(document).on('click', '.thumbs', function(e) {                 //thumbnail click

                                                         

        //FUNCTIONALITY
        e.preventDefault();                         //prevent submits
        $thumbs.removeClass('active');              //remove active from thumbnails
        $(this).addClass('active');                 //add active to the clicked thumbnail
                                                    
        if(cache.hasOwnProperty(src)) {             //if cache contains the image
            if(cache(src).isLoading === false) {    //and its not loading
                cF(cache[src].$img);                //crossfade function call
            }                                       

        } else {                                    //if not in the cache
            
            $img = $('<img/'); 
            $frame.append($img);                   //store an empty img tag in the var

            cache[src] = {                         //Store clicked image into the cache
                $img: $img,                        //path to the image $frame.addClass('is-loading');                                  
                isLoading: true                    //isLoading true $frame.find('img').remove();
            };
        }


        $img.on('load', function() {                           //post-load image function

            $(this).hide();                                    //hide it

            $frame.find('photo-box').append($img);     //remove its loading class and append the image
                  
            cache[src].isLoading = false

            if (request === src) {                             //if the request is the most recent requested image
                cF($(this));                                   //crossfading function
            }

        });

        $frame.addClass('is-Loading');                         //add is-loading class to img container

        $img.attr({                                            //img attributes
            'src': src,                                        //src attr loads img
            'alt' : this.title || ''   
        });
    });
});
}
})(jQuery);