var trelloControllers = angular.module('trelloControllers', []);

trelloControllers.controller('AngularCardsController', function($scope, $http, $location){
	$http.get('http://trello-office.mo/api/Cards').then(function successCallback(response) {
		console.log('success');
        console.log($location.path('/cards'));
		response.data =  response.data.splice(0, 500);
        $scope.cards = response.data;
	}, function errorCallback (response) {
		console.log(response);
	});
})

trelloControllers.controller('AngularOneMemberController',['$scope', '$http',function ($scope, $http){ 
    $scope.member = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        // apiURL = trelloControllers.provider();
        // apiURL = '/api/OneMember/22';
        $http.get(/*'/api/OneMember/' + memberID*/ apiURL ).then(function successCallback(response) {
            console.log('success');
            $scope.member = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });
        
        
    }
    $scope.init();
}]);


trelloControllers.controller('AngularBoardsController',['$scope', '$http', function ($scope, $http){ 
    $scope.boards = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        $http.get('http://trello-office.mo/api/Boards').then(function successCallback(response) {
            console.log('success');
            $scope.boards = response.data;
            console.log(response.data);
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
        $http.get('http://trello-office.mo/api/Members').then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });


    }
    $scope.init();

}]);




trelloControllers.controller('AngularListsController',[ '$scope', '$http', function ($scope, $http){ 
    $scope.lists = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        $http.get('http://trello-office.mo/api/Lists').then(function successCallback(response) {
            console.log('success');
            $scope.lists = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });


    }
    $scope.init();

}]);

