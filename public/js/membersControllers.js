trelloControllers.controller('AngularOneMemberController',['$scope', '$http', '$location' ,function ($scope, $http, $location){ 
    $scope.members = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        apiURL = $location.path();
        console.log(apiURL);
        
        $http.get('http://trello-office.mo/api' + apiURL ).then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });
        
        
    }
    $scope.init();
}]);




trelloControllers.controller('AngularMembersController',[ '$scope', '$http', function ($scope, $http){ 
    $scope.members = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        $http.get('http://trello-office.mo/api/members').then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });


    }
    $scope.init();

}]);
