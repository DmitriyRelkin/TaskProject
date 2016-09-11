module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:passwordVerify
  *
  *	@description
  *	This is directive for validation confirm password
  *
  * @scope The data for which are taken through the two-way binding
  **/
  'use strict';
  module
  .directive("passwordVerify", function() {
    return {
        require: "ngModel",
        scope: {
          passwordVerify: '='
        },
        link: passwordCheck
     };
     /**
   		* @ngdoc function
   		* @name passwordCheck
   		*
   		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
   		*
   		*	@description
   		*	This is function for password confirm inspection.
   		*
   		**/
      function passwordCheck(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
              combined = scope.passwordVerify + '_' + ctrl.$viewValue;
            }
             return combined;
        }, function(value) {
            if (value) {
              ctrl.$parsers.unshift(function(viewValue) {
                var origin = scope.passwordVerify;
                if (origin !== viewValue) {
                    ctrl.$setValidity("passwordVerify", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("passwordVerify", true);
                    return viewValue;
                }
              });
            }
        });
      }
  });
};
