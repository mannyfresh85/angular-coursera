(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];


Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};



function LunchCheckController($scope) {
  //default value of list
  $scope.list = "";

  $scope.checkLunchMenu = function () {
    if ( $scope.list == ""){
      //default message if no items were entered
      $scope.message = "Please enter data first";
      $scope.msgClass = "error";
      $scope.msgFieldClass = "fieldError";
    } else {
      $scope.listArray = $scope.list.split(',');
      $scope.listArray = $scope.listArray.clean("");
      if ( $scope.listArray.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.msgClass = "success";
          $scope.msgFieldClass = "fieldSuccess";
      } else {
          $scope.message = "Too much!";
          $scope.msgClass = "success";
          $scope.msgFieldClass = "fieldSuccess";
      }
    }
  }
}
})();
