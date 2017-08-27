(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  //default value of list
  $scope.list = "";

  $scope.checkLunchMenu = function () {
    if ( $scope.list == ""){
      //default message if no items were entered
      $scope.message = "Please enter data first";
    } else {
      $scope.listArray = $scope.list.split(',');
      console.log($scope.listArray.length);
      console.log($scope.listArray);

      if ( $scope.listArray.length <= 3) {
          $scope.message = "Enjoy!";
      } else {
          $scope.message = "Too much!";
      }
    }

  }

}

})();
