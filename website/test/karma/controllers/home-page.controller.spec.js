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

  it("Having a home page controller", function () {
    expect(homePageCtrl).toBeDefined();
  });

  it("Having a properties photos", function () {
    expect($scope.photos).toBeDefined();
    expect($scope.photos.length).toEqual(4);
  });

  it("Argument function showSlide the is properties photos.src", function () {
    expect($scope.showSlide()).toEqual($scope.photos.src);
  });

  it("Counter change for changing slides", function () {
    expect($scope.counter).toBe(0);
    $interval.flush(3000);
    $scope.$digest();
    expect($scope.counter).toBe(1);
    $scope.$digest();
    $interval.flush(3000);
  });

  it("Having a properties serviceBlock", function () {
    expect($scope.serviceBlock).toBeDefined();
    expect($scope.serviceBlock.length).toEqual(6);
  });

  it("Having a properties strategyBlock", function () {
    expect($scope.strategyBlock).toBeDefined();
    expect($scope.strategyBlock.length).toEqual(3);
  });

});
