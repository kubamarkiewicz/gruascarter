app.controller('EmpresasController', function($scope, $rootScope, $http, $routeParams, config, ParallaxService) {  

    // ParallaxService.add($('section#empresas-header'), true);
    $("section#empresas-header").paroller({ factor: '0.75'});

});