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

  it("Having a log-in page controller", function () {
    expect(loginCtrl).toBeDefined();
  });

  it("Having a function sendDataLogin for send data authorization", function () {
    expect(loginCtrl.sendDataLogin).toBeDefined();
  });

  it("Class variable that stores the value of the class styles of animation,form is submitted", function() {
    expect(loginCtrl.sendDataLogin).toBeDefined(loginCtrl.spinnerClass);
    expect(loginCtrl.spinnerClass).toBeUndefined("loading");
    loginCtrl.sendDataLogin();
    expect(loginCtrl.spinnerClass).toBeDefined("loading");
  });

  it("Having a sevice for send data, used in function sendDataLogin", function() {
    expect(authService).toBeDefined();
    spyOn(authService, 'sendLogin').and.returnValue(deferred.promise);
    loginCtrl.sendDataLogin();
    expect(authService.sendLogin).toHaveBeenCalled();
  });
});
