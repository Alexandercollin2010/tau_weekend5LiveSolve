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
      // confirm addition
      var alertString = $scope.nameIn + ' has been added! YAAAAY!!!';
      alert( alertString );
      // emtpy inputs
      $scope.nameIn = '';
      $scope.ageIn = '';
      $scope.typeIn = '';
      $scope.picUrlIn = '';
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

  $scope.removePet = function( indexIn ){
    console.log( 'confirming removal of:', $scope.allPets[ indexIn ] );
    if( confirm( 'Remove ' + $scope.allPets[ indexIn ].name + '?' ) ){
      console.log( 'removing:', $scope.allPets[ indexIn ] );
    };
  }; // end removePet

  $scope.stateHandler = function( newState ){
    // 0 = greeting, 1 = add, 2 = list
    switch( newState ){
      case 0:
        $scope.greetingView = true;
        $scope.addView = false;
        $scope.listView = false;
        break;
      case 1:
        $scope.greetingView = false;
        $scope.addView = true;
        $scope.listView = false;
        break;
      case 2:
        $scope.greetingView = false;
        $scope.addView = false;
        $scope.listView = true;
        break;
      default:
        $scope.greetingView = true;
        $scope.addView = false;
        $scope.listView = false;
    }; // end switch
  }; // end stateHandler

  $scope.pageLoad = function(){
    console.log( 'in pageLoad' );
    $scope.stateHandler( 0 );
    $scope.getPets();
  }; // end pageLoad
}]); // end pets controller
