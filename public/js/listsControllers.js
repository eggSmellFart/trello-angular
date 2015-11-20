trelloControllers.controller('AngularListsController',['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.lists = [];
    $scope.init = function () {
    	
		$http.get('http://trello-office.mo/api/lists').then(function successCallback(response) {
			console.log('success: ', response.data);
	        // console.log($location.path('/lists'));
			response.data =  response.data.splice(0, 500);
	        $scope.lists = response.data;
		}, function errorCallback (response) {
			console.log(response);
		});
    }
    $scope.init();
}])


trelloControllers.controller('AngularOneListController',['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.lists = [];
    var apiURL = $location.path();
    $scope.init = function () {
		$http.get('http://trello-office.mo/api' + apiURL).then(function successCallback(response) {
			console.log('success: ', response.data);
			response.data =  response.data.splice(0, 500);
	        $scope.lists = response.data;
		}, function errorCallback (response) {
			console.log(response);
		});
	}
	$scope.init();
}])
