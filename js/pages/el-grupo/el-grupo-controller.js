app.controller('ElGrupoController', function($scope, $rootScope, $http, $routeParams, config, ParallaxService) {  

    ParallaxService.add($('section#el-grupo-header'), true);
    // $("section#el-grupo-header").paroller({ factor: '0.75'});


    $('section#el-grupo-contact .column-left, section#el-grupo-contact .column-right').appear(function() {
        $(this).addClass('appeared');
    });


    // SUBMIT FORM
    $scope.submit = function () 
    {
        $http({
            method  : 'GET',
            url     : config.api.urls.sendContact,
            params  : {
                "name" : $scope.name,
                "email" : $scope.email,
                "subject" : $scope.subject,
                "message" : $scope.message
            }
        })
        .then(function(response) {
            if (response.data && response.data === true) {
            	$scope.contactSent = true;
            	$scope.name = $scope.email = $scope.subject = $scope.message = '';
            }
            $("#my-form button[type=submit]").button('reset').attr('disabled', false);
        });
         
        // block button 
        $("#my-form button[type=submit]").button('loading').attr('disabled', true);

    }


});