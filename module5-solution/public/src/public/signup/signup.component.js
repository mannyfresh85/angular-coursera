(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/signup/signup.html',
  bindings: {
  },
  controller: SignUpController
});


SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.submit = function(shortName) {
    console.log('Submit');
    MenuService.getMenuItem(shortName)
    .then(function(result){
      $ctrl.wrongMenuItem = false;
      $ctrl.user.item = result;
      UserService.setUser($ctrl.user);
      $ctrl.resultMessage = "Your information has been saved";
    })
    .catch(function(result){
      $ctrl.wrongMenuItem = true;
      $ctrl.resultMessage = "";
    });

  }
}

})();
