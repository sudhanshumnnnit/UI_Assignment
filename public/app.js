
var routerApp = angular.module('TopHotelApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATE  ========================================
        .state('home', {
            url:'/',
            templateUrl:'partials/home-partial.html',
            controller:'HotelAppCtrl',
            resolve:{
            	hotelList:function($http){
            		return $http.get('https://h4lservices.restlet.net/v1/hotels?media=json')
            		.then(function(response){
            			//console.log('response',response.data);
            			return response.data;
            		});
            	}
            }
        })

        // TOP HOTEL VIEW PAGE  =================================
        .state('topHotels', {
            url:'/topHotels',
            templateUrl:'partials/tophotels-view-partial.html',
            controller:'TopHotelViewCtrl',
            params:{category:null}

        });

        $locationProvider.html5Mode(true);

});