'use strict';

describe('Controller: registrationContentCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      registrationContentCtrl,
      $state,
      authService;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _authService_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    registrationContentCtrl = $controller('registrationContentCtrl', {$scope: $scope});
    authService = _authService_;
  }));

  it("Having a registration page controller", function () {
    expect(registrationContentCtrl).toBeDefined();
  });

  it("Having a function sendDataRegistration for send data authorization", function () {
    expect($scope.sendDataRegistration).toBeDefined();
  });

  it("Class variable that stores the value of the class styles of animation,form is submitted", function() {
    expect($scope.sendDataRegistration).toBeDefined($scope.spinnerClass);
    expect($scope.spinnerClass).toBeUndefined("loading");
    $scope.sendDataRegistration();
    expect($scope.spinnerClass).toBeDefined("loading");
  });

  it("Having a sevice for send data, used in function sendDataRegistration", function() {
    expect(authService).toBeDefined();
    spyOn(authService, 'sendRegistration');
    $scope.sendDataRegistration();
    expect(authService.sendRegistration).toHaveBeenCalled();
  });
});
