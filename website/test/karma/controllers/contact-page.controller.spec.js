'use strict';

describe('Controller: contactPageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      contactPageCtrl,
      $state,
      $q,
      deferred,
      sendMessageData;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$state_, _sendMessageData_, _$q_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $q = _$q_;
      deferred = $q.defer();
      $scope = $rootScope.$new();
      contactPageCtrl = $controller('contactPageCtrl', {$scope: $scope});
      $state = _$state_;
      sendMessageData = _sendMessageData_;
  }));

  it("Having a contact page controller", function () {
    expect(contactPageCtrl).toBeDefined();
  });

  it("Having a function sendContactData for send data authorization", function () {
    expect($scope.sendContactData).toBeDefined();
  });

  it("Class variable that stores the value of the class styles of animation,form is submitted", function() {
    expect($scope.sendContactData).toBeDefined($scope.spinnerClass);
    expect($scope.spinnerClass).toBeUndefined("loading");
    $scope.sendContactData();
    expect($scope.spinnerClass).toBeDefined("loading");
  });

  it("Having a sevice for send data, used in function sendContactData", function() {
    expect(sendMessageData).toBeDefined();
    spyOn(sendMessageData, 'sendMessage').and.returnValue(deferred.promise);
    $scope.sendContactData();
    expect(sendMessageData.sendMessage).toHaveBeenCalled();
  });
});
