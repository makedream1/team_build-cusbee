"use strict";
var cus = angular.module('cus', ['ngRoute']);
cus.config(['$routeProvider','$locationProvider', function($routeProvider){

    $routeProvider.
        when('/',{
            templateUrl: '../../templates/blog/views/home.html',
            controller: 'homeCtrl'
        }).
        when('/contact',{
            templateUrl: '../../templates/blog/views/contact.html',
            controller: 'contactCtrl'
        }).
        when('/work',{
            templateUrl: '../../templates/blog/views/work.html',
            controller: 'workCtrl'
        }).
        when('/service',{
            templateUrl: '../../templates/blog/views/service.html',
            controller: 'serviceCtrl'
        }).
        when('/about',{
            templateUrl: '../../templates/blog/views/about.html',
            controller: 'aboutCtrl'
        }).
        when('/blog',{
            templateUrl: '../../templates/blog/views/blog.html',
            controller: 'blogCtrl'
        }).
        otherwise({
            redirect: '/'
        });
}]);

cus.controller('mainCtrl', function ($scope){
    $scope.slider = false;

});
cus.controller('homeCtrl', function($scope){

});
cus.controller('blogCtrl', function($scope,$rootScope){
    $scope.page = {
        title: "BLOG"
    };
    $rootScope.bodyCss = true;
});
cus.controller('aboutCtrl', function($scope){
    var elem = $('<script/>',{
        src: '../../static/js/about/velocity.min.js'
        }),
        elem2 = $('<script/>',{
            src: '../../static/js/about/velocity.ui.min.js'
        }),
        elem3 = $('<script/>',{
            src: '../../static/js/about/jquery.spincrement.js'
        }),
        elem4 = $('<link/>',{
            rel:"stylesheet",href: '../../static/css/about/style.css'
        });
    $('ng-view').append(elem).append(elem2).append(elem3).append(elem4);

         aboutLoad();
    $(".spincrement").spincrement();

    $.Velocity
        .RegisterEffect("translateUp", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '-100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("translateDown", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("translateNone", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '0', opacity: '1', scale: '1', rotateX: '0', boxShadowBlur: '0'}, 1]
            ]
        });
//scale down
    $.Velocity
        .RegisterEffect("scaleDown", {
            defaultDuration: 1,
            calls: [
                [ { opacity: '0', scale: '0.7', boxShadowBlur: '40px' }, 1]
            ]
        });
//rotation
    $.Velocity
        .RegisterEffect("rotation", {
            defaultDuration: 1,
            calls: [
                [ { opacity: '0', rotateX: '90', translateY: '-100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("rotation.scroll", {
            defaultDuration: 1,
            calls: [
                [ { opacity: '0', rotateX: '90', translateY: '0'}, 1]
            ]
        });
//gallery
    $.Velocity
        .RegisterEffect("scaleDown.moveUp", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '-10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20 ],
                [ { translateY: '-100%' }, 0.60 ],
                [ { translateY: '-100%', scale: '1', boxShadowBlur: '0' }, 0.20 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveUp.scroll", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '-100%', scale: '0.9', boxShadowBlur: '40px' }, 0.60 ],
                [ { translateY: '-100%', scale: '1', boxShadowBlur: '0' }, 0.40 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveUp", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '90%', scale: '0.9', boxShadowBlur: '40px' }, 0.20 ],
                [ { translateY: '0%' }, 0.60 ],
                [ { translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveUp.scroll", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '0%', scale: '0.9' , boxShadowBlur: '40px' }, 0.60 ],
                [ { translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.40 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveDown", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20 ],
                [ { translateY: '100%' }, 0.60 ],
                [ { translateY: '100%', scale: '1', boxShadowBlur: '0'}, 0.20 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveDown.scroll", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '100%', scale: '0.9', boxShadowBlur: '40px' }, 0.60 ],
                [ { translateY: '100%', scale: '1', boxShadowBlur: '0' }, 0.40 ]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveDown", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '-90%', scale: '0.9', boxShadowBlur: '40px' }, 0.20 ],
                [ { translateY: '0%' }, 0.60 ],
                [ { translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20 ]
            ]
        });
//catch up
    $.Velocity
        .RegisterEffect("translateUp.delay", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '0%'}, 0.8, { delay: 100 }],
            ]
        });
//opacity
    $.Velocity
        .RegisterEffect("hide.scaleUp", {
            defaultDuration: 1,
            calls: [
                [ { opacity: '0', scale: '1.2'}, 1 ]
            ]
        });
    $.Velocity
        .RegisterEffect("hide.scaleDown", {
            defaultDuration: 1,
            calls: [
                [ { opacity: '0', scale: '0.8'}, 1 ]
            ]
        });
//parallax
    $.Velocity
        .RegisterEffect("translateUp.half", {
            defaultDuration: 1,
            calls: [
                [ { translateY: '-50%'}, 1]
            ]
        });

    $scope.page = {
        title: "ABOUT US"
    };
   

});
cus.controller('workCtrl', function($scope){
    sliderload();
    $scope.page = {
        title: "WE CREATE"
    };
});
cus.controller('serviceCtrl', function($scope){
    serviceLoad();
    $scope.page = {
        title: "OUR EXPERTICE"
    };
});
cus.controller('contactCtrl', function($scope){
    var map = $('<script/>',{
            src: 'http://maps.google.com/maps/api/js?sensor=false'
        });
    $('ng-view').append(map);

    function func() {
        initialize();
    }
    setTimeout(func, 1000);

    $scope.showMap = true;
    $scope.page = {
        title: "GET CONECTED"
    };
});
function initialize() {
    var latlng = new google.maps.LatLng(48.285792,25.940233);
    var settings = {
        zoom: 18,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),settings);
    var companyPos = new google.maps.LatLng(48.28581699892921, 25.94012792096643);
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"Some title"
    });
}