(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.items = ShoppingListCheckOffService.getItemsToBuy();

  buy.purchaseItem = function (itemIndex) {
    ShoppingListCheckOffService.purchaseItem(itemIndex);
  }
}; //eo ToBuyController



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getItemsPurchased();

  bought.returnItem = function (itemIndex) {
    ShoppingListCheckOffService.returnItem(itemIndex);
  }
}; //eo AlreadyBoughtController


function ShoppingListCheckOffService() {
  var service = this;

  //default list of items to buy
  var toBuy = [
    {
      name : "cookies",
      quantity : 10
    },
    {
      name : "chips",
      quantity : 2
    },
    {
      name : "soda",
      quantity : 1
    },
    {
      name : "juice",
      quantity : 2
    },
    {
      name : "napkins",
      quantity : 5
    }
  ];
  //bought items is defaulted to empty array
  var boughtItems = [];

  service.purchaseItem = function ( itemIndex ) {
      boughtItems.push(toBuy[itemIndex]);
      //removes item passed from toBuy array to boughtItems array
      toBuy.splice(itemIndex, 1);
  };


  service.returnItem = function ( itemIndex ) {
    toBuy.push(boughtItems[itemIndex]);
    //removes item passed from toBuy array to boughtItems array
    boughtItems.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function() {
    return toBuy;
  };

  service.getItemsPurchased = function() {
    return boughtItems;
  };




};//eo ShoppingListCheckOffService


})();
