(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  console.log('Here');

  $ctrl.submit = function(regForm) {
    console.log('Submit');
    console.log('Favorite: ' + regForm.user.favorite );

    MenuService.getMenuItem(regForm.user.favorite)
    .then(function(response){
      $ctrl.itemNotFound = false;
      $ctrl.user = regForm.user;
      $ctrl.user.item = response;
      UserService.saveUser($ctrl.user);
      $ctrl.registerMessage = "Your information has been saved";
    })
    .catch(function(result){
      console.log('Problem!!!')
      $ctrl.itemNotFound = true;
      $ctrl.registerMessage = "No such menu number exists";
    });

  }
}

})();
