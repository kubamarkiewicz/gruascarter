var ParallaxService = angular.module('ParallaxService', [])
.service('ParallaxService', function ($rootScope) 
{

    // this.parallaxRate = 0.75; // between 0 and 1
    this.parallaxRate = 1; // between 0 and 1

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
            
        setTimeout(function(){


            // on scroll
            $(window).off('scroll').on('scroll resize', onScroll);


            function onScroll()
            {
                // console.log('onScroll');
                if (!ParallaxService.initilized) {
                    ParallaxService.init();
                }

                var scrollTop = $(this).scrollTop();

                for (i in ParallaxService.elements) {
                    var element = ParallaxService.elements[i];
                    // move background
                    if (element['background']) {  
                        if (element['background-element']) {  
                            // distance between element center and screen center
                            var distance =  scrollTop + 0.5 * ParallaxService.windowHeight - element['center-offset']; 
                            var translate = distance * ParallaxService.parallaxRate;
                            // element['element'].css('background-position', 'center ' + backgroundPosition);
                            // var translate = 'calc(' + (scrollTop - ParallaxService.elements[i]['center-scroll'] / ParallaxService.parallaxRate) + 'px)';
                            element['background-element'].css('transform', 'translateY(' + translate + 'px)');
                        }
                    }
                    // move whole element
                    else {      
                        // var translate = 'calc(' + centerScroll / ParallaxService.parallaxRate + 'px + 50vh)';
                        // element['element'].css('transform', 'translateY(' + translate + ')');
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

            onWindowResize();

        }, 0);

    };

    this.init = function()
    {
        // console.log('init');
        // console.log(this.elements);
        this.initilized = true;

        this.windowHeight = $(window).height();

        for (i in this.elements) {
            this.elements[i]['height'] = this.elements[i]['element'].height();
            this.elements[i]['offset'] = this.elements[i]['element'].offset().top;
            // console.log(this.elements[i]['offset']);
            // distance from the top of page to the center of element
            this.elements[i]['center-offset'] = this.elements[i]['offset'] + this.elements[i]['height'] * 0.5;
            if (!this.elements[i]['center-offset']) {
                this.initilized = false;
            }

            if (this.elements[i]['background'] && !this.elements[i]['background-element']) {
                // create background element
                this.elements[i]['element'].prepend('<div class="parallax-background"></div>');
                this.elements[i]['background-element'] = this.elements[i]['element'].find('.parallax-background');
                // set background image
                this.elements[i]['background-element'].css('background-image', this.elements[i]['element'].css('background-image'));
                this.elements[i]['element'].css('background-size', '0').css('position', 'relative');
                // set background height
                var backgroundHeight = this.windowHeight;
                this.elements[i]['background-element'].css('height', backgroundHeight + 'px');
                this.elements[i]['background-element'].css('margin-top', ((this.elements[i]['height'] - backgroundHeight) / 2) + 'px');
            } 
            else {
                // this.elements[i]['element'].css('transform', 'none');
            }
        }
    }


    this.remove = function()
    {
        this.elements = [];
        this.initilized = false;
    }


});