var indexModule = angular.module('indexModule',['ui.select','ngSanitize','ngMaterial']);

angular.module('indexModule').config(function($httpProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
});



indexModule.controller('indexInit', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {


    var teamSize = 1;
    $scope.twotwoeight = false;
    $scope.devList=[{
        langs: {},
        frameworks: {},
        worktime: {},
        level: {},
        editable: true,
        multipliable: true
    }];

    $http.get('/information').success(function(response){
        $scope.allSkillList = response;
    });
    $scope.edit = function(developer){
        if(developer.editable) {
            if (developer.multipliable) {
                if (teamSize!=5){
                teamSize++;
                $scope.devList.push( {
                        langs: {},
                        frameworks: {},
                        worktime: {},
                        level: {},
                        editable: true,
                        multipliable:true
                    });
                }
            }
            else {
                console.log("you already add new one!");
            }
        }
        developer.editable=true;
    };

    $scope.delete = function(developer) {
        var dd=$scope.devList.indexOf(developer);
        if (teamSize!=1){
        $scope.devList.splice(dd,1);
        teamSize--;
        }
    };

    $scope.selectManager = function(){
        $scope.twotwoeight = true;
    };

    $scope.unselectManager = function(){
        $scope.twotwoeight = false;
    };

    $scope.sendProjectData = function(){
        $http.post('/information', {
            teamSize: teamSize,
            managerReq: $scope.twotwoeight,
            clientEmail : $scope.newBooking.clientEmail,
            projectDescription:$scope.newBooking.projectDescription,
            dev: $scope.devList
        });
    };


}]);