'use strict';
angular.module("sampleApp").directive('validateText', function() {
  var TEXT_REGEXP = /([A-Za-z])\w+/;

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

        ctrl.$validators['mandatory'] = function(modelValue) {

          return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
        };
      }
    };
});
