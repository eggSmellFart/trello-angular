var TrelloOffice = angular.module("TrelloOffice",  ['ngRoute', 'ngResource','trelloControllers'])
    .config(function( $interpolateProvider){    
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

    TrelloOffice.config(['$routeProvider', '$resourceProvider' , 
        function($routeProvider,$resourceProvider , $locationProvider) {

    //         TrelloOffice.provider('members', function () {
    //             var memberID = '';
    //             return {
    //                 setMemberID: function  (id) {
    //                     memberID  = id;
    //                 },
    //                 $get: function () {
    //                     memberURL = '/api/OneMember/' + memberID;
    // console.log(memberURL)
    //                     return memberURL; 
    //                 }
    //             }
    //         })
        $routeProvider
        .when('Trello-Office/cards', {
            templateUrl: '../templates/partials/cards.html',
            controller: 'AngularCardsController'
        })
        .when('/boards', {

            templateUrl: '../templates/partials/boards.html',
            controller: 'AngularBoardsController'
        })

        .when('/members', {
            templateUrl: '../templates/partials/members.html',
            controller: 'AngularMembersController'
        })
        // .otherwise({
        //     redirectTo: '/'
        // })
        // .when('Trello-Office/member/:memberID', {

        //     controller: 'AngularOneMemberController',
        //     controllerAs: 'oneMember'
        // })
        // .when('Trello-Office/members/cards', {
        //     controller: 'AngluarMembersToCardsController',
        //     controllerAs: 'cardsToMembers'
        // })

    }]);


// TrelloOffice.run(['$route', function ($route) {
//     $route.reload();
// }]);

