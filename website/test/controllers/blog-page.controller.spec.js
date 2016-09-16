'use strict';

describe('Controller: blogContentCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      blogContentCtrl;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      blogContentCtrl = $controller('blogContentCtrl', {$scope: $scope});
  }));

  it("availability blogContentCtrl", function() {
    expect(blogContentCtrl).toBeDefined();
  });

  it("blogContent property", function() {
    expect($scope.blogContent).toBeDefined();
    expect($scope.blogContent.length).toEqual(3);
  });

  it("btnBlog property", function() {
    expect($scope.btnBlog).toBeDefined();
    expect($scope.btnBlog.length).toEqual(4);
  });

  it("btnBlogNav property", function() {
    expect($scope.btnBlogNav).toBeDefined();
    expect($scope.btnBlogNav.length).toEqual(4);
  });
});
