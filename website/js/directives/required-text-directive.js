module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateText
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
      link: requiredText
      };
      /**
  		* @ngdoc function
  		* @name requiredText
  		*
  		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
  		*
  		*	@description
  		*	This is function for text validation.
  		*
      * @return {Bolean}
  		**/
      function requiredText(scope, elm, attrs, ctrl) {
        ctrl.$validators['mandatory'] = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
        };
      }
  });
};
