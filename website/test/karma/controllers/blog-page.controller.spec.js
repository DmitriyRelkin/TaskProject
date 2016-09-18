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

  it("Having a blog page controller", function() {
    expect(blogContentCtrl).toBeDefined();
  });

  it("Having a blogContent property", function() {
    expect($scope.blogContent).toBeDefined();
    expect($scope.blogContent.length).toEqual(3);
  });

  it("Having a btnBlog property", function() {
    expect($scope.btnBlog).toBeDefined();
    expect($scope.btnBlog.length).toEqual(4);
  });

  it("Having a btnBlogNav property", function() {
    expect($scope.btnBlogNav).toBeDefined();
    expect($scope.btnBlogNav.length).toEqual(4);
  });
});
