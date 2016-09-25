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
  .directive("passwordVerify",['$parse', function ($parse) {
    return {
        require: "ngModel",
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
      function link (scope, elem, attrs, ngModel) {
        var originalModel = $parse(attrs.passwordVerify),
            secondModel = $parse(attrs.ngModel);
        // Watch for changes to this input
        scope.$watch(attrs.ngModel, function (newValue) {
          ngModel.$setValidity(attrs.name, newValue === originalModel(scope));
        });
        // Watch for changes to the value-matches model's value
        scope.$watch(attrs.passwordVerify, function (newValue) {
          ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
        });
      }

  }]);
};
