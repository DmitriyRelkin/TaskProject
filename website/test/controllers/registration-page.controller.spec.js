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

  it("registrationContentCtrl", function () {
    expect(registrationContentCtrl).toBeDefined();
  });

  it("sendDataRegistration", function () {
    expect($scope.sendDataRegistration).toBeDefined();
  });

  it("work ng-Class in function sendDataRegistration", function() {
    expect($scope.sendDataRegistration).toBeDefined($scope.spinnerClass);
    expect($scope.spinnerClass).toBeUndefined("loading");
    $scope.sendDataRegistration();
    expect($scope.spinnerClass).toBeDefined("loading");
  });

  it("sevice send-data in function sendDataRegistration", function() {
    expect(authService).toBeDefined();
    spyOn(authService, 'sendRegistration');
    $scope.sendDataRegistration();
    expect(authService.sendRegistration).toHaveBeenCalled();
  });
});
