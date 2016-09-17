'use strict';

describe('Controller: contactPageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      contactPageCtrl,
      $state,
      sendMessageData;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$state_, _sendMessageData_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      contactPageCtrl = $controller('contactPageCtrl', {$scope: $scope});
      $state = _$state_;
      sendMessageData = _sendMessageData_;
  }));

  it("contactPageCtrl", function () {
    expect(contactPageCtrl).toBeDefined();
  });

  it("sendContactData", function () {
    expect($scope.sendContactData).toBeDefined();
  });

  it("work ng-Class in function sendContactData", function() {
    expect($scope.sendContactData).toBeDefined($scope.spinnerClass);
    expect($scope.spinnerClass).toBeUndefined("loading");
    $scope.sendContactData();
    expect($scope.spinnerClass).toBeDefined("loading");
  });

  it("sevice send-data in function sendContactData", function() {
    expect(sendMessageData).toBeDefined();
    spyOn(sendMessageData, 'sendMessage');
    $scope.sendContactData();
    expect(sendMessageData.sendMessage).toHaveBeenCalled();
  });
});
