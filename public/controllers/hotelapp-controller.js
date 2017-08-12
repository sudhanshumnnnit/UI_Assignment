(function () {
	"use strict";
	angular.module('TopHotelApp').
	controller('HotelAppCtrl',function($scope,hotelList){
		$scope.totalHotels=hotelList.length;
		var topHotelCount=0,topSmallHotelCount=0,topLuxuryHotelsCount=0;
		angular.forEach(hotelList,function(value,key){
			if(value.category==='Top Hotels - World'){
				topHotelCount+=1;
			}else if(value.category==='Top Small Hotels - World'){
				topSmallHotelCount+=1;
			}
			else if(value.category==='Top Luxury Hotels - World'){
				topLuxuryHotelsCount+=1;
			}
		});
		$scope.topHotelCount=topHotelCount;
		$scope.topSmallHotelCount=topSmallHotelCount;
		$scope.topLuxuryHotelsCount=topLuxuryHotelsCount;
	});

})();