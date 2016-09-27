'use strict';

describe('Controller: loginCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      loginCtrl,
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
    loginCtrl = $controller('loginCtrl', {$scope: $scope});
    authService = _authService_;
  }));

  it("Should have a log-in page controller", function () {
    expect(loginCtrl).toBeDefined();
  });

  it("Should login", function() {
    expect(loginCtrl.sendDataLogin).toBeDefined(loginCtrl.spinnerClass);
    expect(loginCtrl.spinnerClass).toBeUndefined("loading");
    expect(authService).toBeDefined();
    spyOn(authService, 'sendLogin').and.returnValue(deferred.promise);
    loginCtrl.sendDataLogin();
    expect(loginCtrl.spinnerClass).toBeDefined("loading");
    expect(authService.sendLogin).toHaveBeenCalled();
  });
});
