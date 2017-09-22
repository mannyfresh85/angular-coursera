(function () {
'use strict';

angular.module('data')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject=['categories'];

function MenuDataController(categories) {
  var menuData = this;

  menuData.categories = categories;
}
})();
