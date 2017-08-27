
    var app = angular.module('employeeRecords', [], function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    .constant('API_URL', 'http://localhost/angulara/public/api/v1/');


/*


var app = angular.module('employeeRecords', [], function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
})
    .constant('API_URL', 'http://localhost/angulara/public/api/v1/');*/
