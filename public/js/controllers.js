var trelloControllers = angular.module('trelloControllers', []);

trelloControllers.controller('AngularCardsController', function($scope, $http){
	$http.get('/api/Cards').then(function successCallback(response) {
		console.log('success');
		$scope.cards = response.data;
		$scope.cards =  data.splice(0, 500);
	}, function errorCallback (response) {
		console.log('error');
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


// trelloControllers.controller('AngularCardsController',['$scope', '$http', '$route', function ($scope, $http, $route){ 
//     $scope.cards = [];
//     $scope.loading = false;
//     $scope.init = function () {
//         $scope.loading = true;
//         $http.get('/api/Cards').then(function successCallback(response) {
//             console.log('success');
//             var data = response.data;
//             $scope.cards = response.data;
//             $scope.cards = data.splice(0, 500);
//         }, function errorCallback (response) {
//             console.log('error');
//         });
        
//     }
//     $scope.init();
// }]);


trelloControllers.controller('AngularBoardsController',['$scope', '$http', function ($scope, $http){ 
    $scope.boards = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        $http.get('/api/Boards').then(function successCallback(response) {
            console.log('success');
            $scope.boards = response.data;


        }, function errorCallback (response) {
            console.log('error');
        });

        
    }
    $scope.init();
}]);


trelloControllers.controller('AngularMembersController',[ '$scope', '$http', function ($scope, $http){ 
    $scope.members = [];
    $scope.loading = false;
    // $scope.search = '';
    $scope.init = function () {
        $scope.loading = true;
        $http.get('/api/Members').then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;

        }, function errorCallback (response) {
            console.log('error');
        });


    }
    $scope.init();

}]);

trelloControllers.controller('AngluarTrelloOfficeController', ['$scope', function($scope){
    
}])