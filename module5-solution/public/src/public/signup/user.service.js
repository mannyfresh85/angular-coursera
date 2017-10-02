(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;

  service.saveUser = function (user) {
    console.log('Save User: ' + JSON.stringify(user));
    service.user = user;
  };

  service.getUser = function (user) {
      console.log('Get User: ' + user);
    return service.user;
  };

}
})();
