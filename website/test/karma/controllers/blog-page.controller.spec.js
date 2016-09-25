'use strict';

describe('Controller: blogContentCtrl', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      blogCtrl;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      blogCtrl = $controller('blogContentCtrl', {$scope: $scope});
  }));

  it("Should have a blog page controller", function() {
    expect(blogCtrl).toBeDefined();
  });

  it("Should have a category property", function() {
    expect(blogCtrl.pollCategory).toBeDefined();
    expect(blogCtrl.pollCategory.length).toEqual(10);
  });

  it("Should have a blog category property", function() {
    expect(blogCtrl.blogContent).toBeDefined();
    expect(blogCtrl.blogContent.length).toEqual(3);
  });

  it("Should have a blog social properties property", function() {
    expect(blogCtrl.socialProperties).toBeDefined();
    expect(blogCtrl.socialProperties.length).toEqual(4);
  });

  it("Should have a poll level property", function() {
    expect(blogCtrl.pollLevel).toBeDefined();
    expect(blogCtrl.pollLevel.length).toEqual(4);
  });

  it("Should have a btnBlog property", function() {
    expect(blogCtrl.btnBlog).toBeDefined();
    expect(blogCtrl.btnBlog.length).toEqual(4);
  });

  it("Should have a btnBlogNav property", function() {
    expect(blogCtrl.btnBlogNav).toBeDefined();
    expect(blogCtrl.btnBlogNav.length).toEqual(4);
  });
});
