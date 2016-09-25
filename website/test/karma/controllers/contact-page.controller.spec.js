'use strict';

describe('Controller: contactPageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      contactCtrl,
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
      contactCtrl = $controller('contactPageCtrl', {$scope: $scope});
      $state = _$state_;
      sendMessageData = _sendMessageData_;
  }));

  it("Should have a contact page controller", function () {
    expect(contactCtrl).toBeDefined();
  });

  it("Should have a function sendContactData for send data authorization", function () {
    expect(contactCtrl.sendContactData).toBeDefined();
  });

  it("Class variable that stores the value of the class styles of animation,form is submitted", function() {
    expect(contactCtrl.sendContactData).toBeDefined(contactCtrl.spinnerClass);
    expect(contactCtrl.spinnerClass).toBeUndefined("loading");
    contactCtrl.sendContactData();
    expect(contactCtrl.spinnerClass).toBeDefined("loading");
  });

  it("Should have a sevice for send data, used in function sendContactData", function() {
    expect(sendMessageData).toBeDefined();
    spyOn(sendMessageData, 'send').and.returnValue(deferred.promise);
    contactCtrl.sendContactData();
    expect(sendMessageData.send).toHaveBeenCalled();
  });

});
