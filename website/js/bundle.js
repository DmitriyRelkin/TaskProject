(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
  "use strict";

  var config          = require('./config/routerConfig.js');
  var initServices    = require('./services/initServices.js');
	var initControllers = require('./controllers/initControllers.js');
	var initDirectives  = require('./directives/initDirectives.js');
  var initFilters  = require('./filters/initFilters.js');

  var module = angular.module("sampleApp", [
    'ui.router',
    "ui.bootstrap"
  ]);

  module.run(function ($state,$rootScope) {
      $rootScope.$state = $state;
  });
  module.run([
      "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
      }
  ]);

  initServices(module);
  initControllers(module);
  initDirectives(module);
  initFilters(module);

  config(module);
}());

},{"./config/routerConfig.js":2,"./controllers/initControllers.js":7,"./directives/initDirectives.js":14,"./filters/initFilters.js":18,"./services/initServices.js":19}],2:[function(require,module,exports){
module.exports = function(module) {
  "use strict";
  module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        /* HomePage */
        .state('home', {
            url: '/',
            templateUrl: 'website/templates/home.html'
        })
        /* ContactPage */
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'website/templates/contacts.html'
        })
        /* BlogPage */
        .state('blog', {
            url: '/blog',
            templateUrl: 'website/templates/blog.html'
        })
        /* RegistrationPage */
        .state('reg', {
            url: '/reg',
            templateUrl: 'website/templates/registration.html'
        })
        /* AuthorizationPage */
        .state('sig-in', {
            url: '/sig-in',
            templateUrl: 'website/templates/sig-in.html'
        });
  });
};

},{}],3:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:blogContentCtrl
  * @description
  * This is the blog content controller.
  *
  **/
  module.controller("blogContentCtrl", function($scope) {
    /**
    * @ngdoc property
    * @name blogContent
    * @description
    * It keeps the array, in which objects with links of pictures, headers, text content.
    *
    **/
      $scope.blogContent = [
          {depiction: "https://www.youtube.com/embed/2kodXWejuy0", type: "video", header:"YOUTUBE VIDEO", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
          {depiction: "website/images/img-7.jpg", type: "photo", header:"ETIAM A ODIO NEC MI CONVALLIS MALESUADA", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
          {depiction: "website/images/img-14.jpg", type: "photo", header:"NULLA NEC LIGULA RISUS", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."}
      ];
  });
};

},{}],4:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:mainFooterCtrl
  * @description
  * This is the footer controller.
  *
  **/
  module.controller("mainFooterCtrl", function($scope) {
  });
};

},{}],5:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:HeaderCtrl
  * @description
  * This is the header controller.
  *
  **/
  module.controller("HeaderCtrl", function($scope) {
  });
};

},{}],6:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:bisinessBlockCtrl
  * @description
  * This is the home page content controller.
  *
  **/
  module.controller("homePageCtrl", function($scope) {
      /**
      * @ngdoc property
      * @name serviceBlock
      * @description
      * It keeps the array, in which objects with links of pictures, headers, and paragraphs with text.
      **/
      $scope.serviceBlock = [
          {srcImg: "/website/images/icon-service-1.png", header:"BUSINESS CONSULTING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
          {srcImg: "/website/images/icon-service-2.png", header:"ENTERPRISE APPLICATION", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
          {srcImg: "/website/images/icon-service-3.png", header:"NEW STRATEGY", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
          {srcImg: "/website/images/icon-service-4.png", header:"IT MANAGEMENT", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
          {srcImg: "/website/images/icon-service-5.png", header:"OUTSOURSING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
          {srcImg: "/website/images/icon-service-6.png", header:"SALES & MARKETING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"}
      ];
      /**
      * @ngdoc property
      * @name strategyBlock
      * @description
      * It keeps the array, in which objects with links of pictures, headers, items text.
      **/
      $scope.strategyBlock = [
          {srcImg: "/website/images/page1_img1.jpg", header:"QUESTIONS TO ASK:", item1:"Analysing your organisation business model", item2:"Identifying development opportunities", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
          {srcImg: "/website/images/page1_img2.jpg", header:"THE COMPANY'S ROLE:", item1:"Identifying development opportunities", item2: "Analysing your organisation business model", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
          {srcImg: "/website/images/page1_img3.jpg", header:"OUR KEY OFFERS:", item1:"Defining your objectives", item2: "Analysing your organisation business model", item3:"Identifying development opportunities",  item4:"Identifying the key factors for success"}
      ];
  });


};

},{}],7:[function(require,module,exports){
module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./headerController.js')(module);
	require('./footerController.js')(module);
	require('./scrollTopController.js')(module);
	require('./sliderController.js')(module);
	require('./validationController.js')(module);
	require('./blogPageController.js')(module);
};

},{"./blogPageController.js":3,"./footerController.js":4,"./headerController.js":5,"./homePageController.js":6,"./scrollTopController.js":8,"./sliderController.js":9,"./validationController.js":10}],8:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:goToTopCtrl
  * @description
  * This is the scroll-top controller.
  *
  **/
  module.controller("goToTopCtrl", function($scope) {
  });
};

},{}],9:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:galaryCtrl
  * @description
  * This is the slider controller, and slider function.
  * The second function switch slides.
  *
  * @param index pressed slide
  *
  **/
  module.controller("sliderCtrl", function($scope, $rootScope, $interval) {
    /**
    * @ngdoc property
    * @name photos
    * @description
    * It keeps the array, in which objects with links of pictures, headers, button name, and button text.
    **/
    $scope.photos = [
        {src: "website/images/slide-1.jpg", active : true , btnName: "BUSINES WORKS WITH TECNOLOGY", btnBanner: "We added technology to strategy. You get the multiplier effect"},
        {src: "website/images/slide-2.jpg", active : false , btnName: "PROFESSIONAL CONSULTING SERVICES", btnBanner: "We are the trusted advisor to the world's leading businesses"},
        {src: "website/images/slide-3.jpg", active : false , btnName: "BROADEN YOUR MARKET EDGE", btnBanner: "We work with our clients as we do with our colleagues"},
        {src: "website/images/slide-4.jpg", active : false , btnName: "WE AREA NETWORK OF LEADERS", btnBanner: "We develop unparalleled management insights"}
    ];
    /**
    * @ngdoc function
    * @name showSlide
    * @description
    * This function opens the selected slide by click
    * @param [index]
    **/
    $scope.showSlide = function(index) {
        $scope.photoSrc = $scope.photos[index];
        $scope.btnSrc = $scope.photos[index];
        $scope.btnTitle = $scope.photos[index];
    };
    /**
    * @ngdoc property
    * @name counter
    * @description
    * This property serves as a counter for the function, which switches the slides.
    **/
    $scope.counter = 0;
    /**
    * @ngdoc function
    * @description
    * This function which switches the slides
    **/
    $interval(function () {
      $scope.counter++;
      $scope.photoSrc = $scope.photos[$scope.counter];
      $scope.btnSrc = $scope.photos[$scope.counter];
      $scope.btnTitle = $scope.photos[$scope.counter];
      for(var i = 0; i<$scope.photos.length; i++) {
           $scope.photos[i].active = false;
      }
      $scope.photos[$scope.counter].active = true;
      if ($scope.counter == 3) {
        $scope.counter = -1;
      }
    }, 3000);
  });
};

},{}],10:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:validCtrl
  * @description
  * This is the validation controller, and validation function
  *
  **/
  module.controller("validCtrl", function ($scope, $location, $timeout, sendData) {
      /**
      * @ngdoc function
      * @name sendData
      * @description
      * This function send data, entered by the user in the form.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      $scope.sendData = function (data) {
        /**
        * @ngdoc property
        * @name serviceBlock
        * @description
        * This property holds the value for ng-class in the form
        **/
        $scope.spinnerClass = "visible";

        if (data.user) {
          sendData.send("/reg", data);
        } else if (data.contact) {
          sendData.send("/contacts", data);
        } else if (data.login) {
          sendData.send("/sig-in", data);
        }
        /**
        * @ngdoc function
        * @description
        * This function moves to the home page in three seconds
        **/
        $timeout(function () {
          $location.path("/");
        }, 3000);
      }
  });

};

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name module.directive:validateEmail
  * @restrict A
  *	@description
  *	This is directive for email validation 
  *
  **/
  'use strict';
  module
	.directive('validateEmail', function() {
    var EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        // only apply the validator if ngModel is present and Angular has added the email validator
        if (ctrl && ctrl.$validators.email) {

          // this will overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
  });
}

},{}],13:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name module.directive:validateFullname
  * @restrict A
  *	@description
  *	This is directive for validation full name
  *
  **/
  'use strict';
  module
	.directive('validateFullname', function() {
    var FULLNAME_REGEXP = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

          ctrl.$validators['fullname'] = function(modelValue) {

            return ctrl.$isEmpty(modelValue) || FULLNAME_REGEXP.test(modelValue);
          };
        }
      };
  });
};

},{}],14:[function(require,module,exports){
module.exports = function(module) {
	require('./email-directive.js')(module);
	require('./fullName-directive.js')(module);
	require('./password-check-directive.js')(module);
	require('./required-text-directive.js')(module);
	require('./backToTop-directive.js')(module);
};

},{"./backToTop-directive.js":11,"./email-directive.js":12,"./fullName-directive.js":13,"./password-check-directive.js":15,"./required-text-directive.js":16}],15:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name module.directive:passwordVerify
  *
  *	@description
  *	This is directive for validation confirm password
  *
  **/
  'use strict';
  module
  .directive("passwordVerify", function() {
    return {
        require: "ngModel",
        scope: {
          passwordVerify: '='
        },
        link: function(scope, element, attrs, ctrl) {
          scope.$watch(function() {
              var combined;

              if (scope.passwordVerify || ctrl.$viewValue) {
                 combined = scope.passwordVerify + '_' + ctrl.$viewValue;
              }
              return combined;
          }, function(value) {
              if (value) {
                  ctrl.$parsers.unshift(function(viewValue) {
                      var origin = scope.passwordVerify;
                      if (origin !== viewValue) {
                          ctrl.$setValidity("passwordVerify", false);
                          return undefined;
                      } else {
                          ctrl.$setValidity("passwordVerify", true);
                          return viewValue;
                      }
                  });
              }
          });
       }
     };
  });
};

},{}],16:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name module.directive:validateText
  * @restrict A
  *	@description
  *	This is directive for validation mandatory text input
  *
  **/
  'use strict';
  module
  .directive('validateText', function() {
    var TEXT_REGEXP = /([A-Za-z])\w+/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

          ctrl.$validators['mandatory'] = function(modelValue) {

            return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
          };
        }
      };
  });
};

},{}],17:[function(require,module,exports){
module.exports = function(module) {
  module
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
      return $sce.trustAsResourceUrl(val);
  };
  }])
};

},{}],18:[function(require,module,exports){
module.exports = function(module) {
	require('./iframeFilter.js')(module);
};

},{"./iframeFilter.js":17}],19:[function(require,module,exports){
module.exports = function(module) {
	require('./postService.js')(module);
};

},{"./postService.js":20}],20:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:sendData
  *
  * @description
  *	This is service for send request
  *
  **/

  module.factory("sendData", function ($http) {
      var data;
      return {
          send: send
      };

      function send(url, data) {
         $http.post(url, data)
          .success(function (data) {
              console.log('Status: 200 OK');
          })
          .error(function (data) {
              console.log('Status: 501');
          });
          console.log(data);
      }
  });
};

},{}]},{},[1])