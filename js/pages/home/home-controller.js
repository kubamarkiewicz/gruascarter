app.controller('HomeController', function($scope, $rootScope, $http, $routeParams, config, ParallaxService) {  


    // $("section#home-1").paroller({ factor: '0.75'});
    // $("section#home-4").paroller({ factor: '0.75'});


    // setTimeout(function(){
    	
	    ParallaxService.add($('section#home-1'), true);
	    ParallaxService.add($('section#home-4'), true);

	    $('section#home-3 .first-column, section#home-4 .lead h2').appear(function() {
	     	$(this).addClass('appeared');
	    });

	// }, 0);


});