
trelloControllers.controller('AngularBoardsController',['$scope', '$http', function ($scope, $http){ 
    $scope.boards = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        $http.get('http://trello-office.mo/api/boards').then(function successCallback(response) {
            console.log('success');
            $scope.boards = response.data;
            console.log(response.data);
        }, function errorCallback (response) {
            console.log('error: ',response);
        });

        
    }
    $scope.init();
}]);

trelloControllers.controller('AngularOneBoardController', ['$scope','$http','$location', function($scope, $http, $location) {
    $scope.boards = [];
    $scope.loading = false;
    var apiURL = $location.path();
    console.log(apiURL);
    $scope.init = function() {
        $scope.loading = true;
        $http.get('http://trello-office.mo/api' + apiURL).then(function successCallback (response) {
            console.log('success: ', response.data);
            $scope.boards = response.data;
        }, function errorCallback (response) {
            console.log('error: ',response);
        })
    }
    $scope.init();

}])
