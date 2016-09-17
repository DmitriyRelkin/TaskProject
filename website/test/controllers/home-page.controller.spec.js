'use strict';

describe('Controller: homePageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      homePageCtrl,
      $httpBackend,
      $interval;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$interval_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(/templates.*/).respond(200, '');
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    homePageCtrl = $controller('homePageCtrl', {$scope: $scope});
    $interval = _$interval_;
  }));

  it("availability homePageCtrl", function () {
    expect(homePageCtrl).toBeDefined();
  });

  it("Availability of properties photos", function () {
    expect($scope.photos).toBeDefined();
    expect($scope.photos.length).toEqual(4);
  });

  it("argument function showSlide == properties photos.src", function () {
    expect($scope.showSlide()).toEqual($scope.photos.src);
  });

  it("Change $scope.counter", function () {
    expect($scope.counter).toBe(0);
    $interval.flush(3000);
    $scope.$digest();
    expect($scope.counter).toBe(1);
    $scope.$digest();
    $interval.flush(3000);
  });

  it("Availability of properties serviceBlock", function () {
    expect($scope.serviceBlock).toBeDefined();
    expect($scope.serviceBlock.length).toEqual(6);
  });

  it("Availability of properties strategyBlock", function () {
    expect($scope.strategyBlock).toBeDefined();
    expect($scope.strategyBlock.length).toEqual(3);
  });

});
