(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/main-categories.template.html',
    controller: 'MenuDataController as menuData',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //Items
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/data/templates/main-items.template.html',
    controller: 'MenuItemsController as menuItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        //console.log("StateParams: " + $stateParams.categoryShortName)
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    },
    params: {
      categoryShortName: null
    }
  });

}

})();
