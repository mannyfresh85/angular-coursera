(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService ) {
  var narrow = this;

  narrow.findMatches = function () {
    narrow.found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
    console.log ("Found Items Controller " + narrow.found);
  }


}; //end of NarrowItDownController

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService( $http, ApiBasePath ) {
  var service = this;


  service.getMatchedMenuItems = function(searchTerm) {
    //searchTerm = 'garlic';
    console.log('Search term ' + searchTerm);
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      // process result and only keep items that match
      var foundItems = [];
      //iterate through the menu_items
      angular.forEach(result.data['menu_items'], function(item, index) {
        //check description for searchTerm
        var description = item.description;
        if ( description.includes(searchTerm)){
          foundItems.push(item);
          console.log('Found term ' + item.description)
        }
      });

    // return processed items
      return foundItems;
    });
  }

}; //end of MenuSearchService


})();
