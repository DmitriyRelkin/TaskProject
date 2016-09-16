'use strict';

describe('Directive: backToTop', function () {
  // Arrange
  var $controller,
      $rootScope,
      $scope,
      element,
      $window,
      $anchorScroll;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$anchorScroll_, _$window_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $anchorScroll = _$anchorScroll_;
    $window = _$window_;
    element = angular.element("<div back-to-top></div>");
  }));

  // function scrollTop ($scope, element) {
  //   var $window = $(window);
  //   $window.scroll(function() {
  //     if ($window.scrollTop() <= 0) {
  //       $(element).css({opacity: 0 , visibility: 'hidden', cursor: 'initial'});
  //       $(element).blur();
  //     } else {
  //       $(element).css({opacity: 1 , visibility: 'visible', cursor: 'pointer'});
  //     }
  //   });
  //
  //   element.bind('click', function() {
  //     $body.animate({scrollTop: 0}, 'fast');
  //   });


  //   it('displays the person\'s favorite color on hover', function () {
  //   scope.person = {
  //     greet: function () {
  //       return 'Hello!';
  //     },
  //     favoriteColor: 'blue'
  //   };
  //   scope.$digest();
  //   element.triggerHandler('mouseenter');
  //   expect(element.css('color')).to.equal('blue');
  //   element.triggerHandler('mouseleave');
  //   expect(element.css('color')).to.be.empty;
  // });

  it("backToTop-directive", function () {
    expect(element).toBeDefined();
    // expect(element).toBe(css{opacity: 0 , visibility: 'hidden', cursor: 'initial'});
    // element.triggerHandler('mouseenter');
  });
});
