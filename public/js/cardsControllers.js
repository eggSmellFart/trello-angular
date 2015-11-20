trelloControllers.controller('AngularCardsController',['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.cards = [];
    $scope.init = function () {
    	
		$http.get('http://trello-office.mo/api/cards').then(function successCallback(response) {
			console.log('success');
	        console.log($location.path('/cards'));
			response.data =  response.data.splice(0, 500);
	        $scope.cards = response.data;
		}, function errorCallback (response) {
			console.log(response);
		});
    }
    $scope.init();
}])


trelloControllers.controller('AngularOneCardController',['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.cards = [];
    var apiURL = $location.path();
    $scope.init = function () {
		$http.get('http://trello-office.mo/api' + apiURL).then(function successCallback(response) {
			console.log('success: ', response.data);
			response.data =  response.data.splice(0, 500);
	        $scope.cards = response.data;
		}, function errorCallback (response) {
			console.log(response);
		});
	}
	$scope.init();
}])
