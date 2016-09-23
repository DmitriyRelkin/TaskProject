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
        // scope: true,
        link: link
     };
     /**
   		* @ngdoc function
   		*
   		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
   		*
   		*	@description
   		*	This is function for password confirm inspection.
   		*
      * @return {Bolean}
   		**/
      function link (scope, elem, attrs, ctrl) {
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
        //
        // // ---------------------------------
        // // scope:true
        // // ---------------------------------
        // var checker = function () {
        //   //get the value of the first password
        //   var modelValue = scope.$eval(attrs.ngModel);
        //   //get the value of the other password
        //   var viewValue = scope.$eval(attrs.passwordVerify);
        //   return modelValue == viewValue;
        // };
        // scope.$watch(checker, function (n) {
        //   //set the form control to valid if both
        //   //passwords are the same, else invalid
        //   ctrl.$setValidity("unique", n);
        // });
        //
        // // ---------------------------------
        // // scope : '='
        // // ---------------------------------
        // ctrl.$validators.passwordVerify = function(modelValue, viewValue) {
        //   return modelValue === scope.passwordVerify;
        // };
        // //
        // //
        scope.$watch('modelValue', function(newVal, oldVal) {
          ctrl.$validate();
        });

      }

  });
};
