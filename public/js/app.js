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
    $routeProvider
    .when('/cards', {
        templateUrl: '../partials/cards.html',
        controller: 'AngularCardsController'
    })
    .when('/cards/:id', {
        templateUrl:'../partials/cards.html',
        controller: 'AngularOneCardController'
    })

    .when('/boards/:id', {
        templateUrl: '../partials/boards.html',
        controller: 'AngularOneBoardController'
    })
    .when('/boards', {
        templateUrl: '../partials/boards.html',
        controller: 'AngularBoardsController'
    })
    .when('/boards/:id/lists', {
        templateUrl: '../partials/boards.html',
        controller: 'AngularOneBoardController'
    })

    .when('/members/:id', {
        templateUrl: '../partials/members.html',
        controller: 'AngularOneMemberController'
    })
    .when('/members', {
        templateUrl: '../partials/members.html',
        controller: 'AngularMembersController'
    })

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



