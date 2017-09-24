(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject=['items'];

function MenuItemsController(items) {
  var menuItems = this;

  //console.log("items: " + items)
  menuItems.items = items;

}
})();
