module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateFullname
  * @restrict A
  *	@description
  *	This is directive for validation full name
  *
  **/
  'use strict';
  module
	.directive('validateFullname', function() {

    var FULLNAME_REGEXP = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: link
    };
    /**
		* @ngdoc function
		*
		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
		*
		*	@description
		*	This is function for fullname validation.
		*
		**/
    function link (scope, elm, attrs, ctrl) {
      ctrl.$validators['fullname'] = function(modelValue) {
        return ctrl.$isEmpty(modelValue) || FULLNAME_REGEXP.test(modelValue);
      };
    }
  });
};
