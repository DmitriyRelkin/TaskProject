module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name module.directive:validateText
  * @restrict A
  *	@description
  *	This is directive for validation mandatory text input
  *
  **/
  'use strict';
  module
  .directive('validateText', function() {
    var TEXT_REGEXP = /([A-Za-z])\w+/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

          ctrl.$validators['mandatory'] = function(modelValue) {

            return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
          };
        }
      };
  });
};
