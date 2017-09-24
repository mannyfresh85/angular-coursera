(function () {
'use strict';

angular.module('data')
.component('itemsComponent', {
  templateUrl: 'src/data/templates/items.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});

})();
