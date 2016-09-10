module.exports = function(module) {
  module
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
      return $sce.trustAsResourceUrl(val);
  };
  }])
};
