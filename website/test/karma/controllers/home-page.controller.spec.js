'use strict';

describe('Controller: homePageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      homeCtrl,
      $httpBackend,
      $interval;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$interval_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(/templates.*/).respond(200, '');
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    homeCtrl = $controller('homePageCtrl', {$scope: $scope});
    $interval = _$interval_;
  }));

  it("Should have a home page controller", function () {
    expect(homeCtrl).toBeDefined();
  });

  it("Should have a properties photos", function () {
    expect(homeCtrl.photos).toBeDefined();
    expect(homeCtrl.photos.length).toEqual(4);
  });

  it("Argument function showSlide the is properties photos.src", function () {
    expect(homeCtrl.showSlide()).toEqual(homeCtrl.photos.src);
  });

  it("Counter change for changing slides", function () {
    expect(homeCtrl.counter).toBe(0);
    $interval.flush(3000);
    $scope.$digest();
    expect(homeCtrl.counter).toBe(1);
    $scope.$digest();
    $interval.flush(3000);
  });

  it("Should have a properties serviceBlock", function () {
    expect(homeCtrl.serviceBlock).toBeDefined();
    expect(homeCtrl.serviceBlock.length).toEqual(6);
  });

  it("Should have a properties strategyBlock", function () {
    expect(homeCtrl.strategyBlock).toBeDefined();
    expect(homeCtrl.strategyBlock.length).toEqual(3);
  });

});
