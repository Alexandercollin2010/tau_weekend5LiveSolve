var myApp = angular.module( 'myApp', [] );

// pets controller
myApp.controller( 'PetsController', [ '$scope', '$http', function( $scope, $http ){
  /// - stub data, replace when you've got the real stuff - ///
  $scope.allPets = [];

  $scope.addPet = function(){
    console.log( 'in addPet' );
    // get user input
    // put it into an object
    var petToSend = {
      name: $scope.nameIn,
      age: $scope.ageIn,
      type: $scope.typeIn,
      picUrl: $scope.picUrlIn
    }; // end petToSend
    console.log( 'sending:', petToSend );
    // send object to server
    $http({
      method: 'POST',
      url: '/addPet',
      data: petToSend
    }).then( function( response ) {
      console.log( 'response:', response );
      // update DOM
      $scope.getPets();
    }); // end $http
  }; // end addPet

  $scope.getPets = function(){
    console.log( 'in getPets' );
    $http({
      method: 'GET',
      url: '/getPets'
    }).then( function( response ){
      console.log( 'response:', response );
      // update DOM display
      $scope.allPets = response.data;
    }); // end http
  }; // end getPets

}]); // end pets controller
