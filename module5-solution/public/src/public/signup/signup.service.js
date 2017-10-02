(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath', 'MenuService'];
function SignUpService($http, ApiPath, MenuService) {
  var service = this;

  // var users = [];
  //
  // service.registerUser = function (userObj) {
  //   users.push(userObj);
  // }

  service.checkFavoriteItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      console.log('Returning Info from Menu Service ' + JSON.stringify(response.data));
      service.favoriteItem = response.data;
      console.log('Favorite Item ' + JSON.stringify(service.favoriteItem));
      return service.favoriteItem;
    }, function (response) {
        console.log('Error: ' + response.error);
      });
  };
};

})();
