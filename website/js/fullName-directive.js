'use strict';
angular.module("sampleApp").directive('validateFullname', function() {
  var FULLNAME_REGEXP = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
  // var FULLNAME_REGEXP = /^([a-zA-Z'-]+\s+){1,4}[a-zA-z'-]+$/;

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

        ctrl.$validators['fullname'] = function(modelValue) {

          return ctrl.$isEmpty(modelValue) || FULLNAME_REGEXP.test(modelValue);
        };
      }
    };
});
