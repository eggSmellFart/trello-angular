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
    $scope.cardsToMember = [];
    // $scope.membersCards = [];
    $scope.cards = [];
    var cardMemberID;
    var cardID;
    $scope.lists = [];

    $scope.loading = false;
    $scope.init = function () {
        $scope.loading = true;
        apiURL = $location.path();
        memberID = apiURL.split("/")[2]||"Unknown";
        $http.get('http://trello-office.mo/api/members/' + memberID).then(function successCallback(response) {
            console.log('success');
            $scope.members = response.data;
            var memberID = $scope.members[0].trello_id;
            $http.get('http://trello-office.mo/api/cardsToMembers/' + $scope.members[0].trello_id).then(function successCallback (response) {
                $scope.members.cards = response.data;
                angular.forEach($scope.members.cards, function(item, index){
                    // console.log('http://trello-office.mo/api/cards/' + item.cards_trello_id);
                    $http.get('http://trello-office.mo/api/cardsTrelloID/' + item.cards_trello_id).then(function successCallback (response) {
                        if(response.data.length > 0) {
                            $scope.cardsToMember.push(response.data[0]);

                            $http.get('http://trello-office.mo/api/listsTrelloID/' + response.data[0].lists_trello_id).then(function successCallback (response) {
console.log($scope.cardsToMember);                            
                            //     if (response.data[0].type == 'ready' && reponse.data[0].display == 1 ) {
                            //         scope.lists = response.data;
                            //     }
                             }, function errorCallback (response) {
                            //     console.log('error: ', response.data);
                             })
// console.log(response.data[0].lists_trello_id);
                            // var listTrelloID = $scope.cardsToMember.
                            // $http.get('http://trello-office.mo/api/lists/' + listTrelloID) 
                            // console.log($scope.members.cards);
                        }
                    }, function errorCallback (response) {
                        console.log('error: ', response.data);
                    })
                })
            }, function errorCallback (response) {
                console.log('error: ', response.data);
            }); 
        }, function errorCallback(response) {
            console.log('error: ', response.data);
        });
    }
    // $http.get('http://trello-office.mo/api/')
    $scope.init();
}]);