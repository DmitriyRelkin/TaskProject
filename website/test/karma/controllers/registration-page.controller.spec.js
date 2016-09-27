'use strict';

describe('Controller: registrationContentCtrl', function () {
  var $controller,
      $rootScope,
      $scope,
      regCtrl,
      $state,
      $q,
      deferred,
      authService;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _authService_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    deferred = $q.defer();
    $scope = $rootScope.$new();
    regCtrl = $controller('registrationContentCtrl', {$scope: $scope});
    authService = _authService_;
  }));

  it("Should have a registration page controller", function () {
    expect(regCtrl).toBeDefined();
  });

  it("Should registration", function() {
    expect(regCtrl.sendDataRegistration).toBeDefined(regCtrl.spinnerClass);
    expect(regCtrl.spinnerClass).toBeUndefined("loading");
    expect(authService).toBeDefined();
    spyOn(authService, 'sendRegistration').and.returnValue(deferred.promise);
    regCtrl.sendDataRegistration();
    expect(regCtrl.spinnerClass).toBeDefined("loading");
    expect(authService.sendRegistration).toHaveBeenCalled();
  });
});
