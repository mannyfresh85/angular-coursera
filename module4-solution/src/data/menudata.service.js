(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



MenuDataService.$inject=['$http', 'ApiBasePath'];

function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
  return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    })
  }

  service.getItemsForCategory = function (categoryShortName) {
    //console.log("Short Name: " + categoryShortName);
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (response) {
      //console.log("Promise Response: " + JSON.stringify(response.data.menu_items))
      return response.data.menu_items
    })
  }
}
})();
