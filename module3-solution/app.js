(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items:'<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function foundItemsDirectiveController(){
  var list = this;
    list.emptyList = function(){
      if ( list.items.length === 0 ) {
            return true;
        } else {
            return false;
        }
    }
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService ) {
  var narrow = this;

  narrow.findMatches = function () {
    //check if input field is empty
    if(narrow.searchTerm == undefined || narrow.searchTerm.length === 0 ){
      //empty input field was submitted
      narrow.found = [];
    } else {
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function (result) {
        //console.log("Result " + result );
        narrow.found = result;
      });
    }
    //console.log ("Found Items Controller " + narrow.found);
  }

  narrow.removeItem=function(index){
            narrow.found.splice(index,1);
        };


}; //end of NarrowItDownController

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService( $http, ApiBasePath ) {
  var service = this;


  service.getMatchedMenuItems = function(searchTerm) {
    //searchTerm = 'garlic';
    //console.log('Search term ' + searchTerm);
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      // process result and only keep items that match
      var foundItems = [];
      //iterate through the menu_items
      angular.forEach(result.data['menu_items'], function(item, index) {
        //lowercase to catch for capitalization
        var description = item.description.toLowerCase();
        searchTerm = searchTerm.toLowerCase();
        //check description for searchTerm
        if ( description.includes(searchTerm)){
          foundItems.push(item);
          //console.log('Found term ' + item.description)
        }
      });
    //  console.log('Found Items ' + foundItems)
    // return processed items
      return foundItems;
    });
  }

}; //end of MenuSearchService


})();
