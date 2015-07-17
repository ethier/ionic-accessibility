angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Test1', id: 7 },
    { title: 'Test2', id: 8 },
    { title: 'Test3', id: 9 },
    { title: 'Test4', id: 10 },
    { title: 'Test5', id: 11 },
    { title: 'Test6', id: 12 },
    { title: 'Test7', id: 13 },
    { title: 'Test8', id: 14 },
    { title: 'Test9', id: 15 },
    { title: 'Test10', id: 16 },
    { title: 'Test11', id: 17 },
    { title: 'Test12', id: 18 },
    { title: 'Test13', id: 19 },
    { title: 'Test14', id: 20 },
    { title: 'Test15', id: 21 },
    { title: 'Test16', id: 22 },
    { title: 'Test17', id: 23 },
    { title: 'Test18', id: 24 },
    { title: 'Test19', id: 25 },
    { title: 'Test20', id: 26 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
