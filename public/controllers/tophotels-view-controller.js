(function () {
	angular.module('TopHotelApp').
	controller('TopHotelViewCtrl',function($scope,$http,$stateParams,$window){
		$scope.category=$stateParams.category;

		$scope.openLink=function(link){
			$window.open(link, '_blank');
		}

		$http.get('https://h4lservices.restlet.net/v1/hotels?media=json')
            		.then(function(response){
            			$scope.getAllHotels=response.data;
            		});

		});
})();