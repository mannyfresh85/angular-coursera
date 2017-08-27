(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

//add a method to the Array prototype that will remove all instances of
//deleteValue from the given Array
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
    var listArray = createCleanArray($scope.list);
    if ( listArray.length == 0 ){
      //default message and classes if no items were entered
      assignMsgandClasses("Please enter data first", "error", "fieldError");
    } else if ( listArray.length <= 3 ) {
      assignMsgandClasses("Enjoy!", "success", "fieldSuccess");
    } else {
      assignMsgandClasses("Too much!", "success", "fieldSuccess");
      }
  } // eof checkLunchMenu

  function assignMsgandClasses(msg, msgClass, fieldClass){
    $scope.message = msg;
    $scope.msgClass = msgClass;
    $scope.msgFieldClass = fieldClass;
  }

  function createCleanArray(array){
    array = array.split(',');
    array = array.clean("");
    return array;
  }
}
})();
