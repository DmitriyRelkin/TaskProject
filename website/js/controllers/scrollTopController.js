module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:goToTopCtrl
  * @description
  * This is the footer controller.
  * In the property url stored link to html template scroll-top button.
  *
  **/
  module.controller("goToTopCtrl", function($scope) {
    $scope.url = "website/templates/components/backToTop.html";
  });
};
