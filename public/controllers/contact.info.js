angular.module('dirty').controller('contactInfo', function($scope, $mdDialog, $mdMedia){
  $scope.openFromLeft = function() {
    $mdDialog.show(
        $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Steves Contact Info')
            .textContent('Email: DirtyDConstruction@gmail.com')
            .ok('close')
            // You can specify either sting with query selector
            .openFrom({
              top: -50,
              width: 30,
              height: 80,
              left: 1800
            })
            .closeTo({
              left: 1500
            })
    );
  };

  $scope.showContactInfo = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
          controller: DialogController,
          templateUrl: '../templates/dialog.template.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }

});
