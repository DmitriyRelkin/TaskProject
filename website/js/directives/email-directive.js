module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateEmail
  * @restrict A
  *	@description
  *	This is directive for email validation
  *
  **/
  'use strict';
  module
	.directive('validateEmail', function() {

    var EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: emailInspection
    };
    /**
		* @ngdoc function
		* @name emailInspection
		*
		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
		*
		*	@description
		*	This is function for email validation.
		*
    * @return {Bolean}
		**/
    function emailInspection(scope, elm, attrs, ctrl) {
      /* only apply the validator if ngModel is present and Angular has added the email validator */
      if (ctrl && ctrl.$validators.email) {
        /* this will overwrite the default Angular email validator */
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  });
}
