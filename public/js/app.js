var trelloOffice = angular.module("trelloOffice",  ['ngRoute', 'ngResource','trelloControllers']);
    // .config(function( $interpolateProvider){    
    // $interpolateProvider.startSymbol('<%');
    // $interpolateProvider.endSymbol('%>');

trelloOffice.config(['$routeProvider', '$resourceProvider' , '$locationProvider' ,
    function($routeProvider, $resourceProvider , $locationProvider) {

//         .provider('members', function () {
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
    // $locationProvider.html5Mode(true);
    /* =========================== CARDS =========================== */
    $routeProvider
    .when('/cards', {
        templateUrl: '../partials/cards.html',
        controller: 'AngularCardsController'
    })
    .when('/cards/:id', {
        templateUrl:'../partials/cards.html',
        controller: 'AngularOneCardController'
    })
    

    /* =========================== BOARDS =========================== */
    .when('/boards/:id', {
        templateUrl: '../partials/boards.html',
        controller: 'AngularOneBoardController'
    })
    .when('/boards', {
        templateUrl: '../partials/boards.html',
        controller: 'AngularBoardsController'
    })
    /* =========================== CARDS TO MEMBERS =========================== */
    /* =========================== MEMBERS =========================== */
    .when('/members/:id/boards', {
        templateUrl: '../partials/members.html',
        controller: 'AngularGetBoardsToMembersController'
    })
    .when('/members/:id/cards', {
        templateUrl: '../partials/cardsToMembers.html',
        controller: 'AngularGetCardsToMembersController'
    })
    .when('/members/:id', {
        templateUrl: '../partials/members.html',
        controller: 'AngularOneMemberController'
    })
    .when('/members', {
        templateUrl: '../partials/members.html',
        controller: 'AngularMembersController'
    })


    /* =========================== LISTS =========================== */
    .when('/lists', {
        templateUrl: '../partials/lists.html',
        controller: 'AngularListsController'
    })
    .when('/lists/:id', {
        templateUrl: '../partials/lists.html',
        controller: 'AngularOneListController'
    })
    // .otherwise({
    //     redirectTo: '/'
    // })
}]);



