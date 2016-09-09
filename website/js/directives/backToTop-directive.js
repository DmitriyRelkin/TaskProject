module.exports = function(module) {
	/**
  * @ngdoc directive
  * @name module.directive:backToTop
  * @restrict A
  *	@description
	*	This is directive for scroll to top button
	*
  **/
	'use strict';
	module
	.directive('backToTop', function() {
		return {
			restrict: 'A',
			link: function($scope, element) {
				var $window = $(window);
				var $body = (window.opera) ? (document.compatMode == 'CSS1Compat' ? $('html') : $('body')) : $('html,body');
				$window.scroll(function() {
					if ($window.scrollTop() <= 0) {
						$(element).css({opacity: 0 , visibility: 'hidden', cursor: 'initial'});
						$(element).blur();
					} else {
						$(element).css({opacity: 1 , visibility: 'visible', cursor: 'pointer'});
					}
				});

				element.bind('click', function() {
					$body.animate({scrollTop: 0}, 'fast');
				});

			}
		};
	});
};
