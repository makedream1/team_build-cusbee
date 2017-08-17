var indexModule = angular.module('indexModule',['ui.select','ngSanitize','ngMaterial']);

angular.module('indexModule').config(function($interpolateProvider,$httpProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

});
indexModule.controller('indexInit', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    var selectedDev;
    var teamSize = 1;
    $scope.twotwoeight = false;

    $scope.devlists=[{
            lang :  $scope.lang,
            frame : $scope.frame,
            time :  $scope.time,
            level : $scope.level,
            editable: true,
            multipliable: true
        }];
    $scope.devlistSelect={
            lang :  {},
            frame : {},
            time :  {},
            level : {},
            editable: [],
            multipliable: []
        };
    $scope.lang = [];
    $scope.frame = [];
    $scope.time = [];
    $scope.level = [];
    var dataObject = {};

    $http.get('/information?format=json').success(function(response){
        var devlist = response;

        for (var i=0; i<devlist.frameworks.length;i++){
            $scope.frame.push(response.frameworks[i].frame_name);
        }
        for(var i=0; i<devlist.langs.length;i++){
            $scope.lang.push(response.langs[i].lang_name);
        }
        for (var i=0; i<devlist.worktime.length;i++){
            $scope.time.push(response.worktime[i].time_name);
        }
        for (var i=0; i<devlist.level.length;i++){
            $scope.level.push(response.level[i].lvl_name);
        }
        dataObject = {
            lang :  $scope.lang,
            frame : $scope.frame,
            time :  $scope.time,
            level : $scope.level,
            editable: true,
            multipliable: true
        };
        //$scope.devlists.push(dataObject);

        // $scope.devlists.push(dataObject);
        //$scope.devlists[0].push(dataObject);
        //console.log(devlist);
    });
    var iter = "";
    $scope.edit = function(developer){

        $scope.devlists.push({
            lang :  $scope.lang,
            frame : $scope.frame,
            time :  $scope.time,
            level : $scope.level,
            editable: true,
            multipliable: true
        });
        /*if(developer.editable) {
            developer.editable = true;
            if (developer.multipliable) {
                developer.multipliable = true;
                teamSize++;
                $scope.devlists.push(dataObject);
            } else {
                console.log("you already add new one!");
            }
        }*/
        //developer.editable=true;
    };

    $scope.delete = function(developer) {
        var dd=$scope.devlist.indexOf(developer);
        $scope.devlist.splice(dd,1);
        teamSize--;
    };

    $scope.addOther = function(developer){
        console.log("Add Other Button");
        selectedDev=developer;
    };

    $scope.selectManager = function(){
        $scope.twotwoeight = true;
    };

    $scope.unselectManager = function(){
        $scope.twotwoeight = false;
    };
    $scope.addSelectedOptions = function(){
        for(var i=0; i<$scope.devlist.length;i++){
            if($scope.devlist[i].status){
                selectedDev.otherSkills=selectedDev.otherSkills.concat(" ");
                selectedDev.otherSkills=selectedDev.otherSkills.concat($scope.devlist[i].name);
            }
        }
        console.log("228 "+selectedDev.otherSkills);
    };

    $scope.sendProjectData = function(){

    $scope.newUser={
            managerReq : ($scope.twotwoeight),
            clientEmail : ($scope.newBooking.clientEmail),
            projectDescription:$scope.newBooking.projectDescription,
            lang :  {},
            frame : {},
            time :  {},
            level : {}
    };

            iter = -1;
        $('.addDevDiv select').each(function(){
            iter++;
            var key = $(this).attr('data-key');
            if(iter==0){
                $scope.newUser.lang[key] = $(this).val();
            } else if(iter==1){
                $scope.newUser.frame[key] = $(this).val();
            } else if(iter==2){
                $scope.newUser.time[key] = $(this).val();
            }else if(iter==3){
                $scope.newUser.level[key] = $(this).val();
                iter = -1;
            }
        });


        $http.post('/information', $scope.newUser).
            then(function(response) {
                var message = response.data.info;
            }, function(response) {
            });
    };


}]);