var ParallaxService = angular.module('ParallaxService', [])
.service('ParallaxService', function ($rootScope) 
{

    this.parallaxRate = 1.5;

    this.elements = [];

    this.initilized = false;

    this.add = function(element, background) 
    {
        this.elements.push({
            element     : element,
            height      : undefined,
            offset      : undefined,
            background  : background === undefined ? false : background
        });

        var ParallaxService = this;


        // on scroll

        $(window).off('scroll').on('scroll resize', onScroll);


        function onScroll()
        {
            if (!ParallaxService.initilized) {
                ParallaxService.init();
            }

            var scrollTop = $(this).scrollTop();

            for (i in ParallaxService.elements) {
                var element = ParallaxService.elements[i];
                // scroll position in relation to the center of element
                // var delta = scrollTop - element['offset'] - element['height'] * 0.5;
                var delta = scrollTop - element['offset'];
                // console.log(scrollTop + ' ' + element['offset'] + ' ' + element['height'] * 0.5 + ' ' + delta);
                // move background
                if (element['background']) {  
                    if (element['background-element']) {  
                        // var backgroundPosition = 'calc(' + delta / ParallaxService.parallaxRate + 'px + 50vh + 50%)';
                        // element['element'].css('background-position', 'center ' + backgroundPosition);
                        var translate = 'calc(' + delta / ParallaxService.parallaxRate + 'px - 50%)';
                        // element['background-element'].css('transform', 'translateY(' + translate + ')');
                    }
                }
                // move whole element
                else {      
                    var translate = 'calc(' + delta / ParallaxService.parallaxRate + 'px + 50vh)';
                    element['element'].css('transform', 'translateY(' + translate + ')');
                }
            }
        }


        // on window resize

        function onWindowResize() 
        {
            onScroll();
            setTimeout(function(){
                ParallaxService.initilized = false;
            }, 500);
        }
        $(window).resize(onWindowResize);


        onWindowResize() ;
    };

    this.init = function()
    {
        this.initilized = true;

        for (i in this.elements) {
            if (this.elements[i]['background'] && !this.elements[i]['background-element']) {
                var backgroundImage = this.elements[i]['element'].css('background-image');
                this.elements[i]['element'].css('background-image', 'none');
                this.elements[i]['element'].before('<div class="parallax-background"></div>');
                this.elements[i]['background-element'] = this.elements[i]['element'].parent().find('.parallax-background');
                this.elements[i]['background-element'].css('background-image', backgroundImage);
            } 
            else {
                this.elements[i]['element'].css('transform', 'none');
            }
            this.elements[i]['offset'] = this.elements[i]['element'].offset().top;
            this.elements[i]['height'] = this.elements[i]['element'].height();
        }
    }


});