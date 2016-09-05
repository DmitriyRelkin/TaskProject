module.exports = function(module) {
  module.controller("mainHeaderCtrl", function($scope) {
    $scope.url = "website/templates/components/header.html";
  });
  module.controller("mainFooterCtrl", function($scope) {
    $scope.url = "website/templates/components/footer.html";
  });
};
