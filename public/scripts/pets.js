var myApp = angular.module( 'myApp', [] );

// pets controller
myApp.controller( 'PetsController', [ '$scope', '$http', function( $scope, $http ){
  $scope.allPets = [ { name:'Reggie', age: 5, type: 'troublemaker (oh yeah)', picUrl: 'http://devjana.net/support/tau/reggie.jpeg' } ];
}]); // end pets controller
