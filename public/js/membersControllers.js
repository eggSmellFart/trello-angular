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


trelloControllers.controller('AngularGetBoardsToMembersController',[ '$scope', '$http', '$location', function ($scope, $http, $location){ 
    $scope.members = [];
    $scope.baords = [];
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        apiURL = $location.path();
        console.log(apiURL);
        $http.get('http://trello-office.mo/api' + apiURL).then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
        }, function errorCallback (response) {
            console.log('error');
        });
        


    }
    $scope.init();

}]);

trelloControllers.controller('AngularGetCardsToMembersController',[ '$scope', '$http', '$location', function ($scope, $http, $location){ 
    $scope.cardsToMembers = [];
    $scope.member = [];
    $scope.membersCards = [];
    $scope.cards = [];
    var cardMemberID;
    var cardID;
    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        apiURL = $location.path();
        memberID = apiURL.split("/")[2]||"Unknown";
        $http.get('http://trello-office.mo/api/members/' + memberID).then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
            console.log('http://trello-office.mo/api/cardsToMembers/'+ $scope.members[0].trello_id);
        }, function errorCallback(response) {
            console.log('error');
        });

//     $scope.init = function () {
//         $scope.loading = true;
//         apiURL = $location.path();
//         memberID = apiURL.split("/")[2]||"Unknown";
//         $http.get('http://trello-office.mo/api/members/' + memberID).then(function successCallback(response) {
//             console.log('success');
//             $scope.members = response.data;
//         }, function errorCallback(response) {
//             console.log('error');
//         });
//         $http.get('http://trello-office.mo/api' + apiURL).then(function successCallback(response) {
//             console.log('success');
//             // response.data =  response.data.splice(0, 500);
//             $scope.cardsToMembers = response.data;
// console.log(response.data.length);
//             angular.forEach($scope.cardsToMembers, function(item, index) {
//                 if (item.members_trello_id ==  $scope.members[0].trello_id) {
//                     $http.get('http://trello-office.mo/api/cards/' + item.cards_trello_id).then(function successCallback(response) {
//                         if (response.data.length > 0) {
//                             $scope.cards.push(response.data);
// console.log('http://trello-office.mo/api/cards/' + item.cards_trello_id);
//                         }
                        
//                     }, function successCallback (response) {
//                         console.log('error: ', response.data);
//                     })
//                 }
                
//             })

//         }, function errorCallback (response) {
//             console.log('error');
//         });
        
    }
    $scope.init();

}]);