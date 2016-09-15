'use strict';

describe('Controller: homePageCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      homePageCtrl,
      $interval;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$interval_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      homePageCtrl = $controller('homePageCtrl', {$scope: $scope});
      $interval = _$interval_;
  }));

  it("availability controller", function () {
    expect(homePageCtrl).toBeDefined();
  });

  it("Availability of properties photos", function () {
    expect($scope.photos).toBeDefined();
    expect($scope.photos.length).toEqual(4);
  });

  it("argument function showSlide == properties photos.src", function () {
    expect($scope.showSlide()).toEqual($scope.photos.src);
  });

  it("$scope.counter", function () {
    expect($scope.counter).toBeDefined();
    expect($scope.counter).toEqual(0);
  });

  it("Change $scope.counter", function () {
    expect($scope.counter).toEqual(0);
    expect($scope.autoSlider).toHaveBeenCalled();
  });
});
