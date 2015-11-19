var app  = angular.module('TrelloOffice', []); 

app.provider('members', function () {
    var memberID = '';
    return {
        setMemberID: function  (id) {
            console.log(id);
            memberID  = id;
        },
        $get: function () {
            return {
                memberUrl: '/api/OneMember/' + memberID
            }
        }
    }
}) 


app.config(function(membersProvider) {
    membersProvider.setMemberID('22');   
});

app.controller('AngularOneMemberController',['$http', '$scope', 'members', function($http, $scope, memberUrl) {
    $scope.member = [];
    $http.get(memberUrl).then(function successCallback(response) {
        console.log('success');
        $scope.member = response.data;
    }, function errorCallback (response) {
            console.log('error');
    });
}]);
