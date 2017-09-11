(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService ) {
  var narrow = this;

  narrow.foundItems = MenuSearchService.getMatchedMenuItems();

  console.log ("Found Items" + narrow.foundItems);

}; //end of NarrowItDownController

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService( $http, ApiBasePath ) {
  var service = this;

  service.getMatchedMenuItems = function() {
    return $http({method: "GET", url: (ApiBasePath + "/menu_items.json")})
    .then(function (result) {
      // process result and only keep items that match
      var foundItems = []
      console.log("Result" + result.data['menu_items'][0]);


      // return processed items
      return foundItems;
    });
  }






  // service.getMenuItems = function () {
  //     var response = $http({
  //       method: "GET",
  //       url: (ApiBasePath + "/menu_items.json")
  //     });
  //
  //     return response;
  //   };



  //  service.getMatchedMenuItems = function(searchTerm) {
  //   var menu = service.getMenuItems();



  //   menu.then(function (response) {
  //     service.items = response.data;
  //     console.log('service items within promise' + service.items['menu_items'])
  //   })
  //   .catch(function (error) {
  //     console.log("Something went terribly wrong.");
  //   });
  //
  //
  //
  //   service.foundItems = [];
  //     console.log(menu['menu_items']);
  //       //iterate through the menu_items
  //       angular.forEach(menu['menu_items'], function(item, index) {
  //         //check description for searchTerm
  //         var description = item.description;
  //         if ( description.includes(searchTerm)){
  //           service.foundItems.push(item);
  //         }
  //       });
  //
  //       return service.foundItems;
  //
  //
  //   // console.log('Down Here ' + service.items );
  //   // return searchTerm;
  // }; //end of getMatchedMenuItems

}; //end of MenuSearchService


})();
