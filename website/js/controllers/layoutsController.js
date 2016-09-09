module.exports = function(module) {
  module.controller("mainHeaderCtrl", function($scope) {
    $scope.url = "website/templates/components/header.html";
  });
  module.controller("mainFooterCtrl", function($scope) {
    $scope.url = "website/templates/components/footer.html";
  });
  module.controller("goToTopCtrl", function($scope) {
    $scope.url = "website/templates/components/backToTop.html";
  });
  module.controller('navbarCtrl', function($scope) {
    $scope.name = "";
  });
};
