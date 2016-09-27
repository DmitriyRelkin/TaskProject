'use strict';

describe('Controller: contactPageCtrl', function () {

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

  it("Should send massege", function() {
    expect(contactCtrl.sendContactData).toBeDefined(contactCtrl.spinnerClass);
    expect(contactCtrl.spinnerClass).toBeUndefined("loading");
    expect(sendMessageData).toBeDefined();
    spyOn(sendMessageData, 'send').and.returnValue(deferred.promise);
    contactCtrl.sendContactData();
    expect(contactCtrl.spinnerClass).toBeDefined("loading");
    expect(sendMessageData.send).toHaveBeenCalled();
  });

});
