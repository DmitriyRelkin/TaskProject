'use strict';

describe('Controller: loginCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      loginCtrl,
      $state,
      authService;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _authService_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    loginCtrl = $controller('loginCtrl', {$scope: $scope});
    authService = _authService_;
  }));

  it("loginCtrl", function () {
    expect(loginCtrl).toBeDefined();
  });

  it("loginCtrl", function () {
    expect($scope.sendDataLogin).toBeDefined();
  });

  it("work ng-Class in function sendDataRegistration", function() {
    expect($scope.sendDataLogin).toBeDefined($scope.spinnerClass);
    expect($scope.spinnerClass).toBeUndefined("loading");
    $scope.sendDataLogin();
    expect($scope.spinnerClass).toBeDefined("loading");
  });

  it("sevice send-data in function sendDataLogin", function() {
    expect(authService).toBeDefined();
    spyOn(authService, 'sendLogin');
    $scope.sendDataLogin();
    expect(authService.sendLogin).toHaveBeenCalled();
  });
});
